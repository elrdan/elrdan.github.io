import {themes as prismThemes} from 'prism-react-renderer';

const math = require('remark-math');
const katex = require('rehype-katex');
const path = require('path');
const dotenv = require('dotenv');
const env = process.env.NODE_ENV || 'development'; // 환경 변수를 설정, 기본값은 'development'

// 환경에 따라 다른 .env 파일을 로드
if (env === 'production') {
    dotenv.config({ path: '.env.production' });
} else {
    dotenv.config({ path: '.env' });
}

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Elrdan',
    tagline: '안녕하세요. 엘르단 사이트 방문을 환영합니다.',
    favicon: 'img/blog_logo_favicon.png',

    url: 'https://elrdan.github.io/',
    baseUrl: '/',

    organizationName: 'elrdan',
    projectName: 'elrdan.github.io',

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    i18n: {
        defaultLocale: 'ko',
        locales: ['ko', 'en'],
        localeConfigs: {
            ko: {
                label: "한국어",
            },
            en: {
                label: "English"
            }
        }
    },

    customFields: {
        githubClientId: process.env.GITHUB_CLIENT_ID,  // Client ID 사용
        githubCallbackUrl: process.env.GITHUB_CALLBACK_URL,  // Callback URL 사용
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    id: 'default',
                    path: 'docs',
                    routeBasePath: '/',
                    // 수학기호를 사용하기 위한 설정
                    remarkPlugins: [math],
                    rehypePlugins: [katex],

                    sidebarPath: require.resolve('./sidebars.js'),
                    sidebarCollapsed: true,          // 사이드바를 기본적으로 접는 상태
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
        // [
        //     '@docusaurus/plugin-google-analytics',
        //     {
        //         trackingID: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
        //         anonymizeIP: true, // IP 익명화 -> IP 주소의 마지막 옥텟이 제거되거나, IPv6주소의 마지막 80비트가 익명화
        //     },
        // ],
        'docusaurus-plugin-sass',      // sass 설정
        // webpack alias 설정 추가
        function myPlugin(context, options) {
            return {
                name: 'custom-webpack-alias',
                configureWebpack(config, isServer, utils) {
                    return {
                        resolve: {
                            alias: {
                                '@code/generated': path.resolve(__dirname, 'src', 'generated'),
                                '@component': path.resolve(__dirname, 'src', 'components'),
                                '@code': path.resolve(__dirname, 'code')
                            },
                        },
                    };
                },
            };
        },
    ],
};


export default config;
