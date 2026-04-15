import { defineConfig } from "vitepress";

export default defineConfig({
  locales: {
    root: { label: "English", lang: "en-US", dir: "ltr" },
    cmn: { label: "普通话", lang: "cmn", dir: "ltr" },
  },

  cleanUrls: true,
  lastUpdated: true,
});
