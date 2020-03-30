import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import BlogEntries from '../statics/data/blogs.json'

Vue.use(VueRouter)

const blogRoutes = Object.keys(BlogEntries).map(section => {
  const children = BlogEntries[section].map(child => ({
    path: child.id,
    name: child.id,
    component: () => import(`../markdowns/${section}/${child.id}.md`)
  }))
  return {
    path: `/${section}`,
    name: section,
    component: () => import('../views/Blog.vue'),
    children
  }
})

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  ...blogRoutes
]

const router = new VueRouter({
  routes
})

export default router
