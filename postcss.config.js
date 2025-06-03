/**
 * @type {import('postcss-preset-env').pluginOptions}
 */
const envConfig = {
  autoprefixer: {
    flexbox: "no-2009",
  },
  stage: 3,
  features: {
    "custom-properties": false,
    "logical-properties-and-values": true,
    "not-pseudo-class": true,
  },
};

module.exports = {
  plugins: [
    [
      "postcss-simple-vars",
      {
        variables: function () {
          return { APP_STATIC_URL: process.env.APP_STATIC_URL };
        },
      },
    ],
    "postcss-mixins",
    // "postcss-flexbugs-fixes",
    "postcss-import",
    "postcss-nested",
    "postcss-custom-properties",
    ["postcss-preset-env", envConfig],
    [
      // Делаем доступным custom-media для всех css-модулей (без импорта файла)
      // @See: https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-custom-media#modular-css-processing
      "@csstools/postcss-global-data",
      {
        files: ["./src/styles/media.css"],
      },
    ],
    // подключаем custom-media
    "postcss-custom-media",
  ],
};
