<template>
   <v-container class="mt-8">
       <v-row v-for="video in videos" :key="video.id">
           <v-col md="9" cols="12">
               <div
                 class="video-player-box"
                 v-video-player:videoPlayer="playerOptions">
                 
               <!-- @ended="markPlayed" -->
                </div>
           </v-col>
           <v-col md="3" cols="12">
               <div class="display-1">
                   {{video.name}}
               </div>

               <!-- <div class="green--text" v-if="isPlayed(video.id)">
                   <font-awesome-icon icon="check"/>
                   Played
               </div>
               <div v-else>
                   <v-btn x-small @click="markPlayed" v-if="currentUser.name">
                       Mark Played
                   </v-btn>
               </div> -->

               <div v-html="video.description"></div>

               <span v-for="tag_id in video.tagIds" :key="tag_id.id">
                   <v-btn :to="{name: 'tag', params: {id: tag_id}}"
                   color="green lighten-2"
                   class="mr-1 mb-2">
                        {{tag_id.name}}
                    </v-btn> 
               </span>
           </v-col>
       </v-row>
   </v-container>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'
import 'video.js/dist/video-js.css'
import Vue from 'vue'

if(process.browser){
    const VueVideoPlayer = require('vue-video-player/dist/ssr')
    Vue.use(VueVideoPlayer)
}
export default {
    data(){
        return{
            user: ''
        }
    },
    head(){
        return {
            title: `watch - ${this.videos.attributes.name}`
        }
    },
    async asyncData({$axios, params}){
        let response = await $axios.get('http://localhost:3000/api/videos/')
        let videos = response.data.find(vid => vid.attributes.id == params.id)
        return {
            videos
        }  
    },
    computed: {
        playerOptions(){
            return {
                language: 'en',
                playbackRates: [0.7, 1.0, 1.5, 2.0, 2.5, 3.0],
                sources: [{
                type: "video/mp4",
                src: this.videos.attributes.videoUrl
                }],
                poster: this.videos.attributes.thumbnail,
                fluid: true
                    }
        }
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

<style>

</style>