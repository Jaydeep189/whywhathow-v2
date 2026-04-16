// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  // update to your live domain before deploying
  site: "https://whywhathow.quest",

  integrations: [sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },
});
