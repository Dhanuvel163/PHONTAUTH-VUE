<template>
  <ul class="nav">
    <li class="nav-item">
      <ul class="nav-link">
        <router-link class="link" to="/">Home</router-link>
      </ul>
    </li>
    <li class="nav-item" v-if="!isloggedin">
      <ul class="nav-link">
        <router-link class="link" to="/PhoneAuth">Login</router-link>
      </ul>
    </li>
    <li class="nav-item" v-if="isloggedin">
      <ul class="nav-link">
        <router-link class="link" to="/Dashboard">Dashboard</router-link>
      </ul>
    </li>
    <li class="nav-item" v-if="isloggedin">
      <ul class="nav-link">
        <a @click="logout" class="link">Logout</a>
      </ul>
    </li>
  </ul>
</template>

<script>
import * as firebase from "firebase";
import "../fb.js";

export default {
  name: "Header",
  created() {
    if (firebase.auth().currentUser) {
      this.$store.commit("login");
    }
  },
  computed: {
    isloggedin: function() {
      return this.$store.state.islogin;
    },
  },
  methods: {
    logout: function() {
      var that = this;
      if (firebase.auth().currentUser) {
        firebase
          .auth()
          .signOut()
          .then(function() {
            that.$store.commit("logout");
            alert("Successfully Logged out");
            that.$router.push("/");
          })
          .catch(function() {
            alert("You are already Logged out");
            this.$router.push("/");
          });
      } else {
        alert("You are already Logged out");
        this.$router.push("/");
      }
    },
  },
};
</script>
<style scoped>
.nav {
  background-color: indigo;
  height: 90px;
  max-height: fit-content;
  padding-left: 15px;
}
.link {
  color: whitesmoke;
  font-weight: bold;
  text-decoration: none;
}
.nav-item {
  display: flex;
  align-items: center;
}
ul .nav-link:hover {
  background-color: coral;
  border-radius: 3px;
}
</style>
