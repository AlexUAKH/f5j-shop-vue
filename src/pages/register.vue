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
        <div
          class="form__item"
          :class="{ errorItem: $v.repeatPassword.$error }"
        >
          <label for="repeatPassword" class="form__label"
            >Repeat password</label
          >
          <input
            id="repeatPassword"
            type="password"
            placeholder="Repeat your password"
            autocomplete="false"
            :class="{ error: $v.repeatPassword.$error }"
            v-model.trim="$v.repeatPassword.$model"
            @change="$v.password.$touch()"
            @blur="$v.email.$touch()"
          />
          <div class="error" v-if="!$v.repeatPassword.required">
            Field can't be empty
          </div>
          <div class="error" v-if="!$v.repeatPassword.sameAsPassword">
            Passwords must be identical.
          </div>
        </div>
        <button
          class="btn submitBtn"
          type="submit"
          :disabled="submitStatus === 'PENDING' || $v.$invalid"
        >
          CREATE ACCOUNT
        </button>
        <p class="typo__p" v-if="submitStatus === 'PENDING'">Sending...</p>
        <p class="have_account">
          Already have an account?
          <router-link to="/login">Login</router-link>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";

export default {
  name: "register",
  props: {},
  data() {
    return {
      email: "",
      password: "",
      repeatPassword: "",
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
    },
    repeatPassword: {
      required,
      sameAsPassword: sameAs("password")
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
          .dispatch("registerUser", user)
          .then(() => {
            this.$router.push("/");
          })
          .catch((error) => {
            this.submitStatus = "ERROR";
            console.log("error: ", error);
          });
      }
    }
  }
};
</script>

<style lang="scss">
.register {
}
</style>
