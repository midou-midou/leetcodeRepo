import { defineConfig } from 'vitepress'
import VitePluginVitePressAutoSidebar from 'vite-plugin-vitepress-auto-sidebar'

const baseDir = 'leetcodeRepo'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "midou-code",
  description: "算法code",
  base: `/${baseDir}/`,
  srcDir: baseDir,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '基础题', link: '/基础题/加一.md' },
      { text: '中级题', link: '/中级题/岛屿数量.md' },
      { text: '高级题', link: '/高级题/分发糖果.md' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/midou-midou/leetcodeRepo' }
    ]
  },
  vite: {
    plugins: [
      VitePluginVitePressAutoSidebar({
        path: 'leetcodeRepo',
        sideBarResolved: data => {
          for (let parent in data) {
            data[parent] = [{
              text: parent.slice(1, parent.length - 1),
              ...data[parent][0]
            }]
          }
          return data
        }
      })
    ]
  }
})
