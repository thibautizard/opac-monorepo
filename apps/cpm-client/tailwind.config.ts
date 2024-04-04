// tailwind config is required for editor support
import sharedConfig from "@repo/tailwind-config";

const config: any = {
  content: ["./app/**/*.tsx", "../../packages/ui/src/**/*.tsx"],
  presets: [sharedConfig],
};

export default config;