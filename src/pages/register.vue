<template>
  <div class="register">
    <div class="formContainer">
      <h1>Sign Up</h1>
      <form @action.prevent="">
        <div class="form__item" :class="{ errorItem: $v.email.$error }">
          <label for="email" class="form__label">Email</label>
          <input
            id="email"
            type="email"
            placeholder="email"
            class="form__input"
            :class="{ error: $v.email.$error }"
            :value="email"
            @change="setEmail($event.target.value)"
          />
          <div class="error" v-if="!$v.email.required">
            Email can't be empty
          </div>
          <div class="error" v-if="!$v.email.email">Enter valid email</div>
        </div>
        <div class="form__item" :class="{ errorItem: $v.password.$error }">
          <label for="password" class="form__label">Password</label>
          <input
            id="password"
            type="password"
            placeholder="password"
            class="form__input"
            :class="{ error: $v.password.$error }"
            :value="password"
            @change="setPassword($event.target.value)"
          />
          <div class="error" v-if="!$v.password.required">
            Password can't be empty
          </div>
          <div class="error" v-if="!$v.password.email">
            Enter valid password
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";

export default {
  name: "register",
  props: {},
  data() {
    return {
      email: "",
      password: "",
      repeatePassword: ""
    };
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      required
    }
  },
  computed: {},
  methods: {
    setEmail(email) {
      this.email = email;
      this.$v.email.$touch();
    },
    setPassword(password) {
      this.password = password;
      this.$v.password.$touch();
    }
  }
};
</script>

<style lang="scss">
.register {
  width: 100%;
  height: 100%;
  margin-top: $header-height;
  display: flex;
  justify-content: center;
  align-items: center;
}

.formContainer {
  width: 95%;
  max-width: 500px;
  height: fit-content;
  border: darkgrey solid 2px;
  border-radius: 10px;

  & h1 {
    font-size: 1.6rem;
  }
}
.form__item {
  display: flex;
  flex-direction: column;
  align-items: start;
  & :not(input) {
    margin-left: 5%;
  }
  & input {
    width: 90%;
    height: 30px;
    margin: 5px auto;
    padding: 5px;
    font-size: 1.2rem;
    &.error {
      border-color: $errorColor;
    }
  }
}
.errorItem {
  color: $errorColor;
}
</style>
