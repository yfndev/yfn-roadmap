import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import { baseUrl, githubUrl, url, yfnUrl } from "./src/constants";

const config: Config = {
  title: "YFN Roadmap",
  tagline: "Wie aus deiner Idee ein Produkt wird",
  favicon: "img/favicon.ico",
  noIndex: false,

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
          editUrl: githubUrl + "/blob/staging",
        },

        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/yfn-social-card.jpg",
    navbar: {
      logo: {
        alt: "YFN",
        src: "img/logo.svg",
        srcDark: "img/logo-dark.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "startupBasicsSidebar",
          position: "left",
          label: "Startup Basics",
        },
        {
          type: "docSidebar",
          sidebarId: "yfnSchoolSidebar",
          position: "left",
          label: "YFN School",
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
          title: "Legal",
          items: [
            {
              label: "Impressum",
              href: yfnUrl ?? "/imprint",
            },
            {
              label: "Datenschutz",
              href: yfnUrl + "/legal/privacy",
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
