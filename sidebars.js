module.exports = {
  blog: [
    {
      type: "category",
      label: "알고리즘",
      items: [
        {
          type: 'category',
          label: '툴 및 리소스',
          items: [
            {
              type: "category",
              label: "리트코드 깃허브 연동",
              items: [
                "blog/algorithm/toolResource/LeetCodeSetting"
              ]
            }
          ]
        },
        {
          type: "category",
          label: "기본 개념",
          items: [
              "blog/algorithm/concept/PrefixSum",
              "blog/algorithm/concept/DynamicProgramming",
              "blog/algorithm/concept/Graph"
          ]
        },
        {
          type: "category",
          label: "백준",
          items: [
              "blog/algorithm/baekjoon/p11724"
          ]
        },
        {
          type: "category",
          label: "프로그래머스",
          items: [
            "blog/algorithm/programmers/P43165"
          ]
        },
        {
          type: "category",
          label: "알고리즘 문제",
          items: [
            "blog/algorithm/other/PMinMax"
          ]
        }
      ]
    },
  ],
};