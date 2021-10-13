export const state = () => ({
    videos: [],
    currentVideo: {},
    users: [],
    currentUser: {}
})

export const mutations =  { 
    SET_VIDEOS(state, videos){
        state.videos = videos
    },
    SET_CURRENT_VID(state, video){
        state.currentVideo = video
    },
    SET_USERS(state, users){
        state.users = users
    },
    LOGOUT_USER(state){
        state.currentUser = {}
    },
    SET_CURRENT_USER(state, user){
        state.currentUser = user
    }
}

export const actions = {
    async loadAllVideos({commit}){
        let response = await this.$axios.get('http://localhost:3000/api/videos/')
        let videos = response.data.map(v => v.attributes)
        commit('SET_VIDEOS', videos)
    },
    async loadOneVid({commit, dispatch}, {videoId}){
        let response = await this.$axios.get('http://localhost:3000/api/videos/')
        let videos = response.data.find(vid => vid.attributes.id == videoId)
        commit('SET_VIDEOS', videos) 
    },
    async loadUsers({commit}){
        let response = await this.$axios.get('http://localhost:3000/api/users/')
        let users = response.data.map(v => v.attributes)
        commit('SET_USERS', users)

        let user = JSON.parse(window.localStorage.currentUser)

        commit('SET_CURRENT_USER', user)
    },
} 