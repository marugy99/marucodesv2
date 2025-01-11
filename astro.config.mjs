import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

import mdx from "@astrojs/mdx";

import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), mdx(), alpinejs()],
  markdown: {
    shikiConfig: {
      theme: "night-owl",
    },
  },
});