import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'category',
      label: '시작하기',
      collapsible: false,
      items: [
        'intro',
        // 'quick-start',
      ],
    },
    // {
    //   type: 'category',
    //   label: '가이드',
    //   items: [
    //     'guide/overview',
    //     {
    //       type: 'category',
    //       label: '백엔드',
    //       items: [
    //         'guide/backend/project-structure',
    //         'guide/backend/api-design',
    //       ],
    //     },
    //     {
    //       type: 'category',
    //       label: '프론트엔드',
    //       items: [
    //         'guide/frontend/architecture',
    //         'guide/frontend/state-management',
    //       ],
    //     },
    //     {
    //       type: 'category',
    //       label: '운영/DevOps',
    //       items: [
    //         'guide/devops/observability',
    //         'guide/devops/deployment',
    //       ],
    //     },
    //   ],
    // },
  ],
};

export default sidebars;