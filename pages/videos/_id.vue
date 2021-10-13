<template>
  <div>
      <nuxt-child :video="video"/>
  </div>
</template>

<script>
export default {
    head() {
        return {
            titleTemplate: `%s - ${this.video.attributes.name}`
        }
    },
    async asyncData({$axios,params, store}) {
      let response = await $axios.$get('http://localhost:3000/api/videos/')
      let video = response.find(vid => vid.attributes.id == params.id)
      store.commit('SET_CURRENT_VID', video)
    },
    computed: {
        video(){
            return this.$store.state.currentVideo
        }
    }
}
</script>

<style>

</style>