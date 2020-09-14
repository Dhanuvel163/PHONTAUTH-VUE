<template>
  <div class="home">
    <h1>Welcome !</h1>
    <div class="container">
      <h3>Please Login To Access Your Dashboard</h3>
      <button @click="loginpage" class="btn btn-outline-primary">
        Get Started !
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    loginpage: function() {
      this.$router.push("/PhoneAuth");
    },
  },
};
</script>

<style scoped>
.container {
  margin-top: 40px;
}
.btn-outline-primary {
  border-color: indigo;
  border-width: 2px;
  color: indigo;
  margin-top: 30px;
}
.btn-outline-primary:hover {
  background-color: indigo !important;
  color: white;
}
</style>
