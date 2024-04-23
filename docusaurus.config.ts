import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import path from "path";

const config: Config = {
  title: "Roadmap",
  tagline: "Dinosaurs are cool",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: process.env.URL ?? "http://localhost/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/roadmap",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "YFN", // Usually your GitHub org/user name.
  projectName: "YFN Roadmap", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "de",
    locales: ["de"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          routeBasePath: "/docs/startup-basics/",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/yfndev/yfn-roadmap/tree/main/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/yfn-social-card.jpg",
    navbar: {
      logo: {
        alt: "YFN",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Roadmap",
        },
        {
          href: "https://github.com/yfndev/yfn-roadmap",
          label: "GitHub",
          position: "right",
        },
        {
          href: process.env.YFN_URL ?? "https://youngfounders.network",
          label: "YFN Website",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Startup Basics",
              to: "/docs/startup-basics/intro",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Impressum",
              href: "https://youngfounders.network/impressum",
            },
            {
              label: "Datenschutz",
              href: "https://youngfounders.network/legal/privacy",
            },
          ],
        },
        {
          title: "Links",
          items: [
            {
              label: "YFN Website",
              href: "https://youngfounders.network",
            },
            {
              label: "GitHub",
              href: "https://github.com/yfndev/yfn-roadmap",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Young Founders Network e.V.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
