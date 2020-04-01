<template>
  <div class='home'>
    <Burger></Burger>
    <Sidebar>
      <div class="center white">
        <img class='img-avatar' alt='Erdan' src='../assets/Avatar.png'>
        <ul class='flex-container space-around'>
          <li>
            <h5>{{POSTS}}</h5>
            <p>{{posts}}</p>
          </li>
          <li>
            <h5>{{CATEGORY}}</h5>
            <p>{{category}}</p>
          </li>
          <li>
            <h5>{{TAGS}}</h5>
            <p>{{Object.keys(tags).length}}</p>
          </li>
        </ul>
        <p class="left">{{DESCRIPTION}}</p>
        <div class='flex-container space-around'>
          <a :href=GITHUB_LINK>
            <img class='img' src='../assets/icon-github.png' width="25" height="25" alt="Computer Hope">
          </a>
          <a :href=INSTAGRAM_LINK>
            <img class='img' src='../assets/icon-instagram.png' width="25" height="25" alt="Computer Hope">
          </a>
        </div>
      </div>
    </Sidebar>
    <h1 class="headline center">{{BLOG_HEADER}}</h1>
    <div class="sections">
      <div v-for="(section, index) in Object.keys(entries)" :key="index" class="group">
        <h2 class="left">{{section}}</h2>
        <div class="section left" v-for="entry in entries[section]" :key="entry.id">
          <div class="entry">
            <h3 @click="$router.push({name: entry.id})">
              {{entry.title}}
              <span class="subtitle">{{entry.date}}</span>
            </h3>
            <p>{{entry.description}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BLOGENTRIES from '@/statics/data/blogs.json'
import Burger from '@/components/Menu/Burger.vue'
import Sidebar from '@/components/Menu/Sidebar.vue'
import { BLOG_HEADER, DESCRIPTION, GITHUB_LINK, INSTAGRAM_LINK, POSTS, CATEGORY, TAGS } from '@/statics/constants/index'

export default {
  name: 'home',
  props: ['posts', 'category', 'tags'],
  components: {
    Burger,
    Sidebar
  },
  data () {
    return {
      BLOG_HEADER: BLOG_HEADER,
      DESCRIPTION: DESCRIPTION,
      GITHUB_LINK: GITHUB_LINK,
      INSTAGRAM_LINK: INSTAGRAM_LINK,
      POSTS: POSTS,
      CATEGORY: CATEGORY,
      TAGS: TAGS
    }
  },
  computed: {
    entries () {
      return BLOGENTRIES
    }
  }
}
</script>
<style lang="scss" scoped>
.left {
  text-align: left;
}
.center {
  text-align: center;
}
.white {
  color: #fff;
}
.headline {
  text-transform: uppercase;
  margin: 0 auto 2rem;
  font-size: 2rem;
}
.img-avatar {
  display: block;
  margin: 2rem auto;
  width: 150px;
}
.flex-container{
  padding: 0;
  margin-bottom: 4rem;
  list-style: none;
  display: flex;
}
.space-around {
  justify-content: space-around;
}
h2 {
  color: #35495e;
  text-transform: capitalize;
}
h3 {
  color: #42b883;
  cursor: pointer;
  margin-bottom: .5rem;
  &:hover {
    text-decoration: underline;
  }
  .subtitle {
    color: grey;
    font-size: .98rem;
    float: right;
    font-weight: normal;
  }
}
h4 {
  margin: 2rem auto;
  font-size: 1.2rem;
  color: white;
}
p {
  margin-top: 0rem;
}
ul li {
  display: inline-block;
  border-right:2px solid;
  width: 100%;
}
li:last-child {
    border-right:none;
}
.sections {
  max-width: 40vw;
  margin: 0 auto;
  margin-top: 4rem;
}
.section {
  margin-bottom: 3rem;
  padding-left: 3rem;
}
.group {
  margin-bottom: 4rem;
}
</style>
