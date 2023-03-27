// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'KSearch',
  tagline: '',
  url: 'https://ksearch.myzlab.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Myzlab', // Usually your GitHub org/user name.
  projectName: 'KSearch Docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themes: ['docusaurus-theme-search-typesense'],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // algolia: {
      //   apiKey: '9e56e9a0f3dcd8ceaaf02f2a56702916',
      //   indexName: 'KSearch',
      //   contextualSearch: true,
      //   appId: 'LELKXCPHX3'
      // },
      typesense: {
        // Replace this with the name of your index/collection.
        // It should match the "index_name" entry in the scraper's "config.json" file.
        typesenseCollectionName: 'KSearch',
  
        typesenseServerConfig: {
          nodes: [
            {
              host: 'typesense.ksearch.myzlab.com',
              port: 443,
              protocol: 'https',
            }
          ],
          apiKey: 'xyz',
        },
  
        // Optional: Typesense search parameters: https://typesense.org/docs/0.24.0/api/search.html#search-parameters
        typesenseSearchParameters: {},
  
        // Optional
        contextualSearch: true,
      },
      navbar: {
        title: 'KSearch',
        logo: {
          alt: 'Ksearch',
          src: 'img/ksearch-logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'what-is-ksearch',
            position: 'left',
            label: 'Docs',
          },
          { 
            to: '/docs/get-started/installation/springboot-jdbc',
            label: 'v2.0.30',
            position: 'right'
          },
          // { 
          //   to: '/blog',
          //   label: 'Blog',
          //   position: 'left'
          // }
          // {
          //   href: 'https://github.com/myzlab/ksearch-springboot-jdbc',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          // {
          //   title: 'Docs',
          //   items: [
          //     {
          //       label: 'Select Statement',
          //       to: '/docs/intro',
          //     },
          //     {
          //       label: 'Insert Statement',
          //       to: '/docs/intro',
          //     },
          //     {
          //       label: 'Update Statement',
          //       to: '/docs/intro',
          //     },
          //     {
          //       label: 'Delete Statement',
          //       to: '/docs/intro',
          //     }
          //   ],
          // },
          // {
          //   title: 'Community',
          //   items: [
          //     {
          //       label: 'Stack Overflow',
          //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
          //     },
          //     {
          //       label: 'Discord',
          //       href: 'https://discordapp.com/invite/docusaurus',
          //     },
          //     {
          //       label: 'Twitter',
          //       href: 'https://twitter.com/docusaurus',
          //     },
          //   ],
          // },
          // {
          //   title: 'More',
          //   items: [
          //     {
          //       label: 'Blog',
          //       to: '/blog',
          //     },
          //     {
          //       label: 'GitHub',
          //       href: 'https://github.com/facebook/docusaurus',
          //     },
          //   ],
          // },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} KSearch. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["java"],
      },
    }),
};

module.exports = config;
