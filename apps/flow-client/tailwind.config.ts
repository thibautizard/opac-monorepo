// tailwind config is required for editor support
// import type { Config } from "tailwindcss";
import sharedConfig from "@opac/tailwind-config";
// : Pick<Config, "content" | "presets">
const config: any = {
  content: ["./app/**/*.tsx"],
  presets: [sharedConfig],
  theme: {
    extend: {
      colors: {
        "flow-blue": "#04249C"
      }
    }
  }
};

export default config;
