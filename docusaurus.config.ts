import {themes as prismThemes} from 'prism-react-renderer';

// Docusaurus 타입 (자동 완성/타입체크)
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  // 사이트 기본 메타 정보
  title: 'Elrdan',
  tagline: '안녕하세요. 엘르단 사이트 방문을 환영합니다.',
  favicon: 'img/blog_logo_favicon.png',

  future: {
    v4: true,
  },

  url: 'https://elrdan.com',
  baseUrl: '/',

  organizationName: 'elrdan',
  projectName: 'elrdan.github.io',

  // gh-pages 브랜치에 정적 빌드 결과물
  deploymentBranch: 'gh-pages',

  // URL 끝에 슬래시 추가 여부
  trailingSlash: false,

  // 링크/마크다운 깨짐 감지 시 동작
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
    localeConfigs: {
      ko: {
        label: "한국어"
      }
    }
  },

  presets: [
    [
      'classic',
      {
        // Docs 섹션 (개발 문서 활용)
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/elrdan/elrdan.github.io/tree/main/',
        },
        
        // Blog 섹션
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/elrdan/elrdan.github.io/tree/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',

          routeBasePath: '/'
        },

        // 커스텀 CSS
        theme: {
          customCss: './src/css/custom.css',
        },

      } satisfies Preset.Options,
    ],
  ],

  // GA4 플러그인
  plugins: [
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: process.env.GOOGLE_ANALYTICS_TRACKING_ID || 'G-XXXXXXXX',
        anonymizeIP: true, // IP 익명화(개인정보 보호)
      },
    ],
  ],

  themeConfig: {
    image: 'img/blog_logo.png',
    navbar: {
      title: '엘르단',
      logo: {
        alt: '엘르단 로고',
        src: 'img/blog_logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'blog',
          position: 'left',
          label: '블로그',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/elrdan/elrdan.github.io',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'X',
              href: 'https://x.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
