// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

const github_url = "https://github.com/elrdan"

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Elrdan',
  tagline: '안녕하세요. 엘르단 사이트 방문을 환영합니다.',
  favicon: 'img/blog_logo.jpg',

  url: 'https://elrdan.github.io/',
  baseUrl: '/',

  organizationName: 'elrdan',
  projectName: 'elrdan.github.io',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'ko',
    locales: ['en', 'ko'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        blog: {
          blogTitle: '블로그',
          blogDescription: '엘르단 블로그입니다!',
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.scss',
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
        title: '엘르단',
        logo: {
          alt: '엘르단 로고',
          src: 'img/blog_logo.jpg',
        },
        items: [
          {to: '/blog', label: '블로그', position: 'left'},
          {to: '/project', label: '프로젝트', position: 'left'},
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
      // 알골리아 검색 설정
      algolia: {
        appId: "J3DX5KXBXH",
        apiKey: '1d2a1bd27189cbc398a6a5e046c19324',
        indexName: 'elrdanio',
        // 옵션: 아래 문서를 참고
        contextualSearch: true,

        // // 옵션: history.push 대신 window.location을 통해 탐색해야 하는 도메인을 지정합니다. 여러 문서 사이트를 크롤링하고 window.location.href를 사용하여 해당 사이트로 이동하려는 경우에 유용한 알골리아 설정입니다.
        // externalUrlRegex: 'external\\.com|domain\\.com',
        //
        // // 옵션: 알골리아에서 URL 일부를 바꿉니다. 다른 baseUrl을 사용하는 여러 배포본에 대해 같은 검색 인덱스를 사용할 경우 유용합니다. `from` 파라미터에 정규식이나 문자열을 사용할 수 있습니다. 예를 들면 localhost:3000 과 myCompany.com/docs 같은 경우입니다.
        // replaceSearchResultPathname: {
        //   from: '/\/blog\//', // or as RegExp: /\/docs\//
        //   to: '/',
        // },
        //
        // // 옵션: 알골리아 검색 파라미터
        // searchParameters: {},

        // 옵션: 기본적으로 활성화된 검색 페이지 경로(비활성화하려면 `false`로 설정)
        searchPagePath: 'false',
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      colorMode: {
        // defaultMode: 'dark',        // 기본 테마 모드 설정
      }
    }),

  // 사용자 정의 플러그인 설정
  plugins: [
      [
        '@docusaurus/plugin-content-docs',
        {
          id: 'project', // 이 플러그인 인스턴스의 고유 ID
          path: './project', // 문서 파일이 위치한 디렉토리
          routeBasePath: '/project', // 이 문서 섹션의 기본 경로
          // sidebarPath: require.resolve('./sidebarsProjectDocs.js'), // 이 섹션의 사이드바 구성
        },
      ],
      'docusaurus-plugin-sass'      // sass 설정
  ]
};



export default config;
