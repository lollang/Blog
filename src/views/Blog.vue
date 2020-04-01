<template>
  <div class="blog">
    <router-link to="/" tag="a" class="back">&laquo; Back</router-link>
    <router-view />
    <google-map v-if="displayMap"/>
  </div>
</template>

<script>
import GoogleMap from '@/components/GoogleMap'

export default {
  name: 'blog',
  props: ['displayMap'],
  components: {
    GoogleMap
  }
}
</script>
