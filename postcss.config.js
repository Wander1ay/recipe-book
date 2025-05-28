import postcssConfig from "@platform-ui/postcssConfig";
import { day, night, postcssThemeVariables } from "@platform-ui/themes";

export default {
    plugins: [
        ...postcssConfig.getPlugins(),
        postcssThemeVariables({
            light: day,
            dark: night,
        }),
    ],
};