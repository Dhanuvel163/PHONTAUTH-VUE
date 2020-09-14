<template>
  <div>
    <h1 style="margin-top:50px">Hello {{ phoneNumber }} , Welcome !</h1>
    <div class="container">
      <div class="card">
        <h4><span>Created Time :</span> {{ Created }}</h4>
        <h4 style="margin-top:40px">
          <span> lastSignIn Time :</span> {{ Latest }}
        </h4>
      </div>
    </div>
  </div>
</template>

<script>
import * as firebase from "firebase";
import "../fb.js";

export default {
  name: "Dashboard",
  computed: {
    phoneNumber: function() {
      return firebase.auth().currentUser.phoneNumber;
    },
    Created: function() {
      return firebase.auth().currentUser.metadata.creationTime;
    },
    Latest: function() {
      return firebase.auth().currentUser.metadata.lastSignInTime;
    },
  },
};
</script>
<style scoped>
.card {
  margin-top: 40px;
  background-color: darkorchid;
  border-radius: 10px;
  color: white;
  padding: 30px;
  border-width: 3px;
  border-color: coral;
  box-shadow: inset 0 0 10px #000000;
}
span {
  color: burlywood;
}
</style>
