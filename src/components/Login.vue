<template>
  <div>
    <form class="login" @submit.prevent="login">
      <h1>Sign in</h1>
      <label>User name</label>
      <input required v-model="Username" type="text" placeholder="Username">
      <label>Password</label>
      <input required v-model="Password" type="password" placeholder="Password">
      <hr>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import api from "@/Services/AuthApiService";

export default {
  data() {
    return {
      Username: "",
      Password: ""
    };
  },
  methods: {
    login: function() {
      const { Username, Password } = this;

      api.login({ Username, Password })
      .then(() => {
        this.$router.push("/dashboard");
      })
      .catch(() => {
        console.log("Auth failed.")
      });
    }
  }
};
</script>