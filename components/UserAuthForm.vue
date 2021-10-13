<template>
  <v-container>
      <v-form>
        <v-text-field v-model="email" label="Email"/>
        <v-text-field type="password" v-model="password" label="Password"/>
      </v-form>

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
                errors: ''
            }
    },
    methods: {
         loginUser(){
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(user => {
                console.log(user);
                this.$router.push('/')
            }).catch(err => {
                this.errors = err.message
            })
        }
    }

}
</script>

<style>

</style>