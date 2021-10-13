<template>
  <v-container>
    <h1>Login</h1>
      
      <v-form class="mt-5">
        <v-text-field v-model="email" label="Email"/>
        <v-text-field type="password" v-model="password" label="Password"/>
      </v-form>

      <v-alert
      class="mt-1"
      color="red lighten-1"
      dark
      v-if="clicked"
    >
      {{errors}}
    </v-alert>
      <div class="mb-5">Do not have an account? <nuxt-link to="/register">Register Account</nuxt-link></div>
      <v-btn @click="loginUser">Login</v-btn>
  </v-container>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'
export default {
    data(){
        return{
                email: '',
                password: '',
                errors: '',
                clicked: null,
            }
    },
    methods: {
         loginUser(){
            firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(user => {
                console.log(user);
                this.$router.push('/')
            }).catch(err => {
                this.errors = err.message
                this.clicked = true
            })
        }
    }

}
</script>

<style>

</style>