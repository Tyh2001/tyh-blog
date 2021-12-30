import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":""},["/index.html","/README.md"]],
  ["v-08b7d390","/annual_summary/",{"title":"年度总结"},["/annual_summary/index.html","/annual_summary/README.md"]],
  ["v-fe51d454","/hello/",{"title":"Hello"},["/hello/index.html","/hello/README.md"]],
  ["v-613d41ab","/int-ques/ques-css.html",{"title":"Css 相关"},["/int-ques/ques-css","/int-ques/ques-css.md"]],
  ["v-3cd2b1b9","/int-ques/ques-html.html",{"title":"Html 相关"},["/int-ques/ques-html","/int-ques/ques-html.md"]],
  ["v-03c024ca","/int-ques/ques-js.html",{"title":"Js 相关"},["/int-ques/ques-js","/int-ques/ques-js.md"]],
  ["v-9371fad0","/int-ques/ques-vue2.html",{"title":"Vue2 相关"},["/int-ques/ques-vue2","/int-ques/ques-vue2.md"]],
  ["v-7d3b22fa","/int-ques/ques-web.html",{"title":"Web 相关"},["/int-ques/ques-web","/int-ques/ques-web.md"]],
  ["v-8659ab34","/int-ques/",{"title":"2022 更新面试题"},["/int-ques/index.html","/int-ques/README.md"]],
  ["v-05b37346","/javascript/js-basic.html",{"title":"基础"},["/javascript/js-basic","/javascript/js-basic.md"]],
  ["v-0f9d7631","/javascript/js-computed.html",{"title":"算法"},["/javascript/js-computed","/javascript/js-computed.md"]],
  ["v-4d97c846","/javascript/js-function.html",{"title":"函数相关"},["/javascript/js-function","/javascript/js-function.md"]],
  ["v-f635f8fc","/javascript/js-methods.html",{"title":"方法"},["/javascript/js-methods","/javascript/js-methods.md"]],
  ["v-5920deba","/javascript/js-utils.html",{"title":"Js 工具函数"},["/javascript/js-utils","/javascript/js-utils.md"]],
  ["v-82681c7e","/milepost/",{"title":"里程碑"},["/milepost/index.html","/milepost/README.md"]],
  ["v-e4cb1150","/other/",{"title":"其它技术"},["/other/index.html","/other/README.md"]],
  ["v-6da6abb1","/typescript/",{"title":"TypeScript 基础"},["/typescript/index.html","/typescript/README.md"]],
  ["v-157886ea","/vue2/",{"title":"Vue2 相关"},["/vue2/index.html","/vue2/README.md"]],
  ["v-15788709","/vue3/",{"title":"Vue3 相关"},["/vue3/index.html","/vue3/README.md"]],
  ["v-3706649a","/404.html",{},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
