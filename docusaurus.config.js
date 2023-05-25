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
        gtag: {
          trackingID: 'G-44B826LV1H',
          anonymizeIP: true,
        }
      }),
    ],
  ],
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      ({
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
      })
    ]
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // algolia: {
      //   apiKey: '9e56e9a0f3dcd8ceaaf02f2a56702916',
      //   indexName: 'KSearch',
      //   contextualSearch: true,
      //   appId: 'LELKXCPHX3'
      // },
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
            label: 'v2.3.0-alpha',
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
      plugins: [
        [
          '@docusaurus/plugin-pwa',
          {
            debug: true,
            offlineModeActivationStrategies: [
              'appInstalled',
              'standalone',
              'queryString',
            ],
            pwaHead: [
              {
                tagName: 'link',
                rel: 'icon',
                href: '/img/docusaurus.png',
              },
              {
                tagName: 'link',
                rel: 'manifest',
                href: '/manifest.json', // your PWA manifest
              },
              {
                tagName: 'meta',
                name: 'theme-color',
                content: 'rgb(37, 194, 160)',
              },
            ],
          },
        ],
      ],
    }),
};

module.exports = config;
