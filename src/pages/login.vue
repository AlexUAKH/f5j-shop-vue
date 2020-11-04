<template>
  <div class="register">
    <div class="formContainer">
      <h1>Sign Up</h1>
      <form @submit.prevent="submit">
        <div class="form__item" :class="{ errorItem: $v.email.$error }">
          <label for="email" class="form__label">Email</label>
          <input
            id="email"
            type="email"
            placeholder="email"
            :class="{ error: $v.email.$error }"
            v-model.trim="$v.email.$model"
            @change="$v.email.$touch()"
            @blur="$v.email.$touch()"
          />
          <div class="error" v-if="!$v.email.required">
            Field can't be empty
          </div>
          <div class="error" v-if="!$v.email.email">Enter valid email</div>
        </div>
        <div class="form__item" :class="{ errorItem: $v.password.$error }">
          <label for="password" class="form__label">Password</label>
          <input
            id="password"
            type="password"
            placeholder="password"
            autocomplete="true"
            :class="{ error: $v.password.$error }"
            v-model.trim="$v.password.$model"
            @change="$v.password.$touch()"
            @blur="$v.password.$touch()"
          />
          <div class="error" v-if="!$v.password.required">
            Field can't be empty
          </div>
          <div class="error" v-if="!$v.password.minLength">
            Enter valid password
          </div>
        </div>
        <button
          class="btn submitBtn"
          type="submit"
          :disabled="submitStatus === 'PENDING' || $v.$invalid"
        >
          LOGIN
        </button>
        <p class="typo__p" v-if="submitStatus === 'PENDING'">Sending...</p>
        <p class="have_account">
          Don't have an account?
          <router-link to="/register">Sign up</router-link>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import { required, email, minLength } from "vuelidate/lib/validators";

export default {
  name: "login",
  props: {},
  data() {
    return {
      email: "",
      password: "",
      submitStatus: ""
    };
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(6)
    }
  },
  methods: {
    submit() {
      const user = {
        email: this.email,
        password: this.password
      };
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        this.submitStatus = "PENDING";
        this.$store
          .dispatch("loginUser", user)
          .then(() => {
            this.$router.push("/");
          })
          .catch(() => {
            this.submitStatus = "ERROR";
          });
      }
    }
  }
};
</script>

<style lang="scss">

</style>
