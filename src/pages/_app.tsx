import "@/styles/globals.css";
import type { AppProps } from "next/app";

// https://react-kit.tcsgroup.io/?path=/story/integration-static-css-themes--docs
import "@platform-ui/themes/tui-themes.css";
import { SafeHydrate } from "@/components/SafeHydrate/SafeHydrate";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SafeHydrate>
      <Component {...pageProps} />
    </SafeHydrate>
  );
}
