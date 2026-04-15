import { defineAdditionalConfig } from "vitepress";

export default defineAdditionalConfig({
  lang: "en",

  title: "Project VRCZ",
  description: "Sets of Useful VRChat Tools",

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: "Home",
        link: "/",
      },
      {
        text: "Projects",
        link: "/projects/",
      },
      {
        text: "Content Publisher",
        link: "/projects/content-publisher/",
      },
      {
        text: "Yet Another SDK Patch",
        link: "/projects/yet-another-sdk-patch/",
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/project-vrcz" }],

    editLink: {
      pattern: "https://github.com/project-vrcz/website/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2026-present Misaka-L",
    },
  },
});
