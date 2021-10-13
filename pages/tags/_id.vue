<template>
  <div>
      <h1 class="display-3 ma-3 d-flex justify-center">
          Videos with Tag "{{tag.name}}"
      </h1>

      <div class="d-flex flex-wrap">
          <div v-for="video in videosOnTag" :key="video.id">
              <video-list :video="video"></video-list>
          </div>
      </div>
  </div>
</template>

<script>
import VideoList from '~/components/VideoList.vue'
export default {
  components: { VideoList },
  async asyncData({$axios, params}){
      let response = await  $axios.get()
      return {
          tag,
          videoOnTag
      }
  }
}
</script>

<style>

</style>