<template>
  <div>
    <div v-if="signup">
      <h3>Sign in with your phone</h3>
      <div class="container" id="main">
        <div class="form-group">
          <div class="container">
            <label for="ph"> Enter your phone number</label>
            <input
              placeholder="eg: +919863566565"
              type="text"
              class="form-control inputt"
              v-model="phone"
              id="input1"
            />
          </div>
        </div>
        <div class="d-flex justify-content-center">
          <div id="recaptcha-container"></div>
        </div>
        <button class="btn btn-outline-primary" @click="signin">
          SUBMIT !
        </button>
      </div>
    </div>
    <div v-else>
      <h3></h3>
      <div class="container" style="margin-top:40px">
        <div class="form-group">
          <label for="ph">
            Enter the verification code sent to your phone</label
          >
          <input
            style="margin-top:10px"
            type="text"
            class="form-control inputt"
            v-model="code"
          />
        </div>
        <button class="btn btn-outline-primary" @click="verify">
          SUBMIT !
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import * as firebase from "firebase";
import "../fb.js";
export default {
  name: "PhoneAuth",
  data() {
    return {
      appVerifier: "",
      phone: "",
      signup: true,
      code: "",
      confirmationResult: "",
      validate: false,
      blur: false,
    };
  },
  mounted() {
    // firebase.auth().settings.appVerificationDisabledForTesting = true;
    this.appVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container"
    );
    this.appVerifier.render().then(function(widgetId) {
      window.recaptchaWidgetId = widgetId;
    });
  },
  methods: {
    signin: function() {
      var that = this;
      let phone = this.phone;
      // let phone = "+916381056781";
      firebase
        .auth()
        .signInWithPhoneNumber(phone, this.appVerifier)
        .then(function(confirmationResult) {
          that.signup = false;
          that.confirmationResult = confirmationResult;
        })
        .catch(function(error) {
          alert(error.message);
        });
    },
    verify: function() {
      var that = this;
      this.confirmationResult
        .confirm(that.code)
        // .confirm("123123")
        .then(function() {
          // var user = result.user;
          that.signup = true;
          that.$store.commit("login");
          that.$router.push("/Dashboard");
        })
        .catch(function(error) {
          console.log(error.message);
          alert("Enter a valid Code");
        });
    },
  },
};
</script>

<style scoped>
.inputt {
  border-width: 2.5px;
  border-color: indigo;
}
#input1:focus {
  box-shadow: inset 0 0px 0 #ddd;
}
h3 {
  font-weight: bold;
}
label {
  font-weight: bold;
  text-align: start;
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
#main {
  margin-top: 50px;
}
</style>
