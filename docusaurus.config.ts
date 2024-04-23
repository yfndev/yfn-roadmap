import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import path from "path";

const url = process.env.URL ?? "http://localhost";
const yfnUrl = process.env.YFN_URL ?? "https://youngfounders.network";
const baseUrl = process.env.BASE_URL ?? "/roadmap";
const githubUrl = "https://github.com/yfndev/yfn-roadmap";

const config: Config = {
  title: "Roadmap",
  tagline: "Dinosaurs are cool",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: url,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: baseUrl,

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
          editUrl: githubUrl + "/tree/main/",
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
          href: githubUrl,
          label: "GitHub",
          position: "right",
        },
        {
          href: yfnUrl,
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
              href: process.env.YFN_URL ?? "/imprint",
            },
            {
              label: "Datenschutz",
              href: yfnUrl + "/legal/privacy",
            },
          ],
        },
        {
          title: "Links",
          items: [
            {
              label: "YFN Website",
              href: yfnUrl,
            },
            {
              label: "GitHub",
              href: githubUrl,
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
