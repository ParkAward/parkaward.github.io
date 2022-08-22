// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Park's Log",
  tagline: "☕ 커피 한잔의 여유~",
  url: "https://parkaward.github.io",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "ParkAward", // Usually your GitHub org/user name.
  projectName: "parkaward.github.io", // Usually your repo name.
  deploymentBranch: "gh-pages",
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "ko",
    locales: ["ko"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.

          editUrl: ({ docPath }) => {
            return `https://github.com/parkaward/parkaward.github.io/edit/master/docs${docPath}`;
          },
        },

        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },

        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Park's Log",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
        hideOnScroll: true,
        items: [
          {
            to: "docs/skill",
            label: "스킬",
            position: "left",
          },
          {
            to: "docs/tech",
            label: "기술",
            position: "left",
          },
          {
            to: "docs/tool",
            label: "툴",
            position: "left",
          },

          {
            href: "https://github.com/ParkAward",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
