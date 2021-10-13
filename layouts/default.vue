<template>
<v-app>
  <v-app-bar app color="green" justify-space-between>
        <v-btn text to="/">Vue ScreenCast</v-btn>
        <v-btn text to="/videos">Videos</v-btn>

        <v-spacer></v-spacer>
        <div v-if="$auth.loggedIn">
          <v-btn text>Logout</v-btn>
        </div>
        <div v-else>
          <div v-if="user">
            <v-btn text  @click="signOut">Logout</v-btn>
          </div>
          <div v-if="!user">
            <v-btn text to="/login">Login</v-btn>
            <v-btn text to="/register">Register</v-btn>
          </div>
        </div>
  </v-app-bar>
  <v-main>
    <Nuxt />
  </v-main>
</v-app>
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
  mounted(){
    firebase.auth().onAuthStateChanged(user => {
      console.log(user);
      this.user = user
    })
  },
  methods: {
    signOut(){
      firebase.auth().signOut().then(user => {
        this.user = ''
        this.$router.push('login')
      })
    }
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
