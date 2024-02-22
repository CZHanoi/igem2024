import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/demo/",
  {
    text: "Wetlab",
    icon: "lightbulb",
    prefix: "/guide/",
    children: [
      {
        text: "Design",
        icon: "lightbulb",
        prefix: "bar/",
        children: [{ text: "safety", icon: "ellipsis", link: "" }, { text: "Part", icon: "ellipsis", link: "" }],
      },
      {
        text: "Protocol",
        icon: "lightbulb",
        prefix: "foo/",
        children: [ ],
      },
    ],
  },
  {
    text: "V2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
