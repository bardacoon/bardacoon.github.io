// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  experimental: {
      fonts: [
          {
              provider: fontProviders.google(),
              name: "Crimson Text",
              cssVariable: "--ff-primary",
          },
          {
              provider: fontProviders.google(),
              name: "Instrument Serif",
              cssVariable: "--ff-secondary",
          },
      ],
  },

  integrations: [mdx()],
});