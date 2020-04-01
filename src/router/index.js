import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import BlogEntries from '@/statics/data/blogs.json'
import { DISPLAY_MAP_RULES } from '@/statics/constants'

Vue.use(VueRouter)

let posts = 0
let category = 0
const tags = {}

const blogRoutes = Object.keys(BlogEntries).map(section => {
  category++
  const children = BlogEntries[section].map(child => {
    posts++
    child.tags.replace(/\s/g, '').split(',').map(item => {
      tags[item] = true
    })
    return {
      path: child.id,
      name: child.id,
      component: () => import(`@/markdowns/${section}/${child.id}.md`)
    }
  })
  console.log('===', DISPLAY_MAP_RULES, section, DISPLAY_MAP_RULES[section])
  return {
    path: `/${section}`,
    name: section,
    props: { displayMap: DISPLAY_MAP_RULES[section] },
    component: () => import('@/views/Blog.vue'),
    children
  }
})

const routes = [
  {
    path: '/',
    name: 'Home',
    props: { posts: posts, category: category, tags: tags },
    component: Home
  },
  ...blogRoutes
]

const router = new VueRouter({
  routes
})

export default router
