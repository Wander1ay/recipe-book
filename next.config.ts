import { readFileSync, existsSync, readdirSync } from "fs";
import type { NextConfig } from "next";

const transpilePackages = createTranspileModules();

const transpilePackagesRegex = new RegExp(
  `[/\\\\]node_modules[/\\\\](${transpilePackages
    ?.map((p) => p.replace(/\//g, "[/\\\\]"))
    .join("|")})[/\\\\]`
);

/**
 * Нужно чтобы next.js не добавлял react-refresh код в транспилированные модули.
 * Фиксит ошибку `Module parse failed: Cannot use 'import.meta' outside a module next.js`
 * @see https://github.com/vercel/next.js/pull/60563 - оригинальный фикс, который должен когда-то появиться в мейне и ^13 версии next тоже (наверное...)
 * @see https://github.com/vercel/next.js/issues/35110 - полезная ишью
 */
function fixReactRefreshForTranspiledModules(config: any) {
  const oneOfRule = config.module.rules.find((rule: object) => "oneOf" in rule);
  oneOfRule.oneOf.forEach((rule: any) => {
    if (
      "use" in rule &&
      Array.isArray(rule.use) &&
      rule.use.some(
        (u: any) => typeof u === "string" && u.includes("react-refresh")
      )
    ) {
      rule.exclude = [rule.exclude, transpilePackagesRegex];
    }
  });
}

function createTranspileModules() {
  const modulesForTranspile = ["framer-motion"];

  if (existsSync("node_modules/@platform-ui")) {
    // Используем next-transpile-modules для @platform-ui, потому что
    // компоненты в @platform-ui не предназначены для ssr и содержат css модули
    // без дополнительной транспиляции, компоненты из @platform-ui не работают.
    // Чтобы компоненты работали корректно приходится еще использовать принудительный перерендер
    // первого кадра @See https://nextjs.org/docs/messages/react-hydration-error
    modulesForTranspile.push(
      ...readdirSync("node_modules/@platform-ui").map(
        (p) => `@platform-ui/${p}`
      )
    );
  }

  if (existsSync("node_modules/@tui-react")) {
    modulesForTranspile.push(
      ...readdirSync("node_modules/@tui-react").map((p) => `@tui-react/${p}`)
    );
  }

  if (existsSync("node_modules/@floating-ui")) {
    modulesForTranspile.push(
      ...readdirSync("node_modules/@floating-ui").map(
        (p) => `@floating-ui/${p}`
      )
    );
  }

  if (existsSync("node_modules/swiper")) {
    modulesForTranspile.push("swiper");
  }

  if (existsSync("node_modules/get-value")) {
    modulesForTranspile.push("get-value");
  }

  // При необходимости добавляем дополнительные библиотеки node_modules для транспиляции
  // @See: https://wiki.tcsbank.ru/pages/viewpage.action?pageId=3149957349
  // modulesForTranspile.push('todo');

  return modulesForTranspile;
}

const nextConfig: NextConfig = {
  transpilePackages,
  reactStrictMode: true,
  webpack: (config) => {
    fixReactRefreshForTranspiledModules(config);

    return config;
  },
  async rewrites() {
    return [
      // Rewrite everything to `pages/index`
      {
        source: "/:any*",
        destination: "/",
      },
    ];
  },
};

export default nextConfig;
