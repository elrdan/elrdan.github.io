// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

const github_url = "https://github.com/elrdan"

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '엘르단 블로그',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/blog_logo.jpg',

  url: 'https://elrdan.github.io/',
  baseUrl: '/',

  organizationName: 'elrdan',
  projectName: 'elrdan.github.io',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'ko',
    locales: ['ko', 'en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/blog_logo.jpg',
      navbar: {
        title: '엘르단 블로그',
        logo: {
          alt: '엘르단 로고',
          src: 'img/blog_logo.jpg',
        },
        items: [
          {to: '/blog', label: '문서', position: 'left'},
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'tutorialSidebar',
          //   position: 'left',
          //   label: 'Tutorial',
          // },
          {
            href: github_url,
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
