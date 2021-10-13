<template>
  <div>
      we are in watching '{{video.attributes.name}}'
    <nuxt-link :to="`/videos/${video.attributes.id}/edit`">
      <button>Edit</button>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['video'],
  head: {
    title: 'Watch'
  }
}
</script>

<style>

</style>