<template>
<div class="home">
    <div class="display-4 ma-4 d-flex justify-center">
        All Videos
    </div>

    <div class="d-flex flex-wrap">
        <div v-for="video in videos" :key="video.name">
            <video-list :video="video"/>
        </div>
    </div>
</div>
</template>

<script>
import {mapState} from 'vuex'
import VideoList from '~/components/VideoList.vue'
import firebase from 'firebase/app'
import 'firebase/auth'
export default {
    data(){
        return {
            user: ''
        }
    },
    head: {
        title: 'Homepage - All video'
    },
  components: { VideoList },
    async fetch({store}){
        await store.dispatch('loadAllVideos')
    },
    computed: {
        ...mapState(['videos'])
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
