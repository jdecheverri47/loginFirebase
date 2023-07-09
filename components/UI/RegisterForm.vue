<script>
import db from "@/composables/firebase.js";
import { collection, addDoc} from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      phoneNumber: '',
      complete: false,
    };
  },
  methods: {
    submitForm() {
      this.$formkit.submit('register-form')
    },

    async createAccount(data) {
      
      let newAcc = {
      firstName: data.text_2,
      lastName: data.text_3,
      email: data.email_5,
      password: data.password,
      phone: parseInt(data.tel_4),
      }
      const email = this.email;
      const password = this.password;
      const auth = getAuth();
      try {
        const docRef = await addDoc(collection(db, 'users'), newAcc);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage)
        });
        await new Promise((r) => setTimeout(r, 1000))
          this.complete = true;
          this.$formkit.reset('register-form');
      } catch (error) {
        console.error('Error adding document:', error);
      }
    }
  },
}
</script>

<template>
  <FormKit
    type="form"
    :config="{ validationVisibility: 'submit' }"
    id="register-form"
    :actions="false"
    @submit="createAccount"
  >
    <FormKit
      v-model="firstName"
      type="text"
      label="First name"
      placeholder="Please enter your first name"
      validation="required"
    />

    <FormKit
      v-model="lastName"
      type="text"
      label="Last name"
      placeholder="Please enter your last name"
      validation="required"
    />

    <FormKit
      v-model="phoneNumber"
      type="tel"
      label="Phone number"
      placeholder="xxx-xxx-xxxx"
      validation="required|matches:/^[0-9]{3}[0-9]{3}[0-9]{4}$/"
      :validation-messages="{
                matches: 'Phone number must be in the format xxx-xxx-xxxx',
              }"
    />

    <FormKit
      v-model="email"
      type="email"
      label="Email"
      validation="required|email"
      placeholder="Please enter your email"
    />

    <FormKit
      v-model="password"
      type="password"
      name="password"
      placeholder="Please enter a new password"
      label="Password"
      validation="required"
    />
  </FormKit>
  <button class="w-full mt-2 py-2 px-1 bg-emerald-300 rounded-full transition-all duration-300 ease-in-out hover:bg-emerald-400 hover:transition-all hover:ease-in-out hover:duration-300 mb-2 cursor-pointer pointer-events-auto" @click="submitForm">Create account</button>
</template>