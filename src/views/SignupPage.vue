<template>
  <from v-on:submit.prevent="submitForm">
    <div>
      <label for="username">id: </label>
      <input id="username" type="text" v-model="username">
    </div>
    <div>
      <label for="password">pw: </label>
      <input id="password" type="password" v-model="password">
    </div>
    <button type="submit">login</button>
  </from>
</template>

<script>
import axios from 'axios';

export default {
  name: "SignupForm",
  data: function() {
    return {
      username:'',
      password:'',
    }
  },
  methods: {
    submitForm() {
      console.log(this.username, this.password);
      var url = '';
      var data = {
        username: this.username,
        password: this.password,
      }
      axios.post(url, data)
      .then(function(res){
        console.log(res);
      })
      .catch(function(err){
        console.log(err);
      })
    }
  },
};
</script>

<style>
@import "C:\Users\sungm\WebstormProjects\cat-success\src\assets\scss\main.scss";
</style>
