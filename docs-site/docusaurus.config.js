// @ts-check
import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "DiscountMate Docs",
  tagline: "Smart Price Scraping & ML Predictions",
  favicon: "img/discountmatemain.PNG",

  url: "https://benidage.github.io",
  baseUrl: "/DiscountMate_new/",

  organizationName: "BeniDage",
  projectName: "DiscountMate_new",
  deploymentBranch: "gh-pages",
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.js",
          editUrl:
            "https://github.com/BeniDage/DiscountMate_new/tree/main/docs-site/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "DiscountMate",
        logo: {
          alt: "DiscountMate Logo",
          src: "img/databytes.PNG", // Ensure you have a logo.svg in static/img/
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Documentation",
          },
          {
            href: "https://github.com/BeniDage/DiscountMate_new",
            label: "GitHub",
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
                label: "Introduction",
                to: "/docs/",
              },
            ],
          },
          {
            title: "Project Links",
            items: [
              {
                label: "Main Repository",
                href: "https://github.com/BeniDage/DiscountMate_new/",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} DiscountMate Team. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
