// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
require("dotenv").config();

const redocusaurus = [
  "redocusaurus",
  {
    debug: Boolean(process.env.DEBUG || process.env.CI),
    specs: [
      {
        id: "using-spec-url",
        specUrl: "https://redocly.github.io/redoc/openapi.yaml",
        routePath: "/api/",
      },
      {
        id: "using-relative-url",
        specUrl: `${process.env.DEPLOY_BASE_URL || "/"}openapi-page.yaml`,
        routePath: "/api/",
      },
    ],
    theme: {
      /**
       * Highlight color for docs
       */
      primaryColor: "#4f46e5",
      /**
       * Options to pass to redoc
       * @see https://github.com/redocly/redoc#redoc-options-object
       */
      redocOptions: { hideDownloadButton: true, disableSearch: true },
    },
  },
];

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "ETHPass",
  tagline: "NFTs In your Pocket",
  url: "https://ethpass.xyz",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "ETHPass", // Usually your GitHub org/user name.
  projectName: "ETHPass", // Usually your repo name.
  customFields: {
    RPC_URL_1: process.env.RPC_URL_1,
    API_HOST: process.env.API_HOST,
    CONTACT_URI: process.env.CONTACT_URI,
  },
  plugins: ["docusaurus-plugin-sass"],
  presets: [
    redocusaurus,
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {
          name: "keywords",
          content: "NFT, NFTs, Apple, Google, Passes, Apple Wallet, Google Pay",
        },
      ],
      navbar: {
        title: "ethpass.xyz",
        // logo: {
        //   alt: 'EthPass Logo',
        //   src: 'img/logo.png',
        // },
        items: [
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          //   label: 'Docs',
          // },
          {
            label: "API Reference",
            position: "left",
            to: "/api",
          },
          {
            to: "https://api.ethpass.xyz",
            label: "Live Demo",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Site",
            items: [
              // {
              //   label: 'Docs',
              //   to: '/docs/intro',
              // },
              {
                label: "API Reference",
                to: "/api",
              },
              {
                label: "Live Demo",
                to: "https://api.ethpass.xyz",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/ethpass",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/ethpass",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ethpass.xyz`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
