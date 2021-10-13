<template>
  <v-container>
      <h1>Video list</h1>
      <v-btn text >Add Video</v-btn>

      <div class="flex-table top">
          <div>Name</div>
          <div>Description</div>
          <div>Actions</div>
      </div>
      <div v-for="video in $store.state.videos" :key="video.id" class="flex-table">
          <div>
              {{video.name}}
          </div>
          <div >
              {{video.description | abbreviate}}
          </div>
              <div class="actions">
                  <nuxt-link :to="`/watch/${video.id}`">Watch</nuxt-link>
                  <nuxt-link :to="`/watch/${video.id}`">Show</nuxt-link>
                  <nuxt-link :to="`/watch/${video.id}`">Edit</nuxt-link>
              </div>
        </div>
  </v-container>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'
export default {
    data(){
        return{
            user: ''
        }
    },
    head: {
        title: 'Manut - Video List'
    },
    filters: {
        abbreviate(text){
            text = text.replace('<p>', '')
            return text.slice(0,50)
        }
    },
    async fetch({$axios, store}){
        let response = await $axios.get('http://localhost:3000/api/videos')
        let videos = response.data.map(v => v.attributes)
        store.commit('SET_VIDEOS', videos)
    },
    mounted(){
        firebase.auth().onAuthStateChanged(user => {
            this.user = user

            if(!this.user)
            this.$router.push('/login')
        })
    }
}
</script>

<style lang="scss" scoped>
.top {
    border-top: 1px black solid;
}
.flex-table{
    display: grid;
    grid-template-columns: repeat(auto-fill, 33%);
    padding: 10px;
    border-bottom: 1px black solid;
    border-left: 1px black solid;
    border-right: 1px black solid;

    &:nth-of-type(2n){
        background: #dedede;

    }

    .actions {
        *{
            padding-right: 15px;
            padding-left: 10px;
        }
    }
}
</style>