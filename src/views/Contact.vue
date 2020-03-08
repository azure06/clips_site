<template>
  <div>
    <v-img src="../assets/decorations.svg">
      <v-card flat tile>
        <v-img
          class="white--text align-end"
          max-height="320"
          style="filter: hue-rotate(210deg)"
          src="../assets/premium.jpg"
        >
          <v-card-title class="display-2 font-weight-thin"
            >Contact</v-card-title
          >
          <v-card-subtitle class="font-weight-bold white--text"
            >We'd love to hear from you</v-card-subtitle
          >
        </v-img>

        <v-card
          :class="$vuetify.breakpoint.smAndDown ? 'ma-4' : 'mx-auto my-10'"
          max-width="860"
        >
          <v-toolbar color="grey lighten-4" flat>
            <v-btn icon>
              <v-icon>mdi-information</v-icon>
            </v-btn>

            <v-toolbar-title class="blue-grey--text text--darken-3">
              Contact
            </v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>

          <v-form
            v-if="showForm"
            name="contact-form"
            ref="contactForm"
            class="px-6 py-10"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            v-model="valid"
            lazy-validation
          >
            <v-row>
              <v-col>
                <v-text-field
                  prepend-inner-icon="mdi-face"
                  name="name"
                  v-model="name"
                  :counter="25"
                  :rules="nameRules"
                  label="Name"
                  required
                  outlined
                ></v-text-field>
              </v-col>
              <v-col>
                <v-text-field
                  prepend-inner-icon="mdi-email"
                  name="email"
                  v-model="email"
                  :rules="emailRules"
                  label="E-mail"
                  required
                  outlined
                ></v-text-field>
              </v-col>
            </v-row>

            <v-divider />

            <v-textarea
              prepend-inner-icon="mdi-message"
              name="message"
              v-model="message"
              :rules="messageRules"
              label="Message"
              required
              outlined
            ></v-textarea>

            <v-card-actions>
              <v-btn large :color="color" @click="send">
                Send
              </v-btn>
            </v-card-actions>
          </v-form>

          <v-subheader v-else> Thanks for contacting us! </v-subheader>
        </v-card>
      </v-card>
    </v-img>
    <v-snackbar v-model="snackbar" color="primary">
      {{ snackbarMessage }}
      <v-btn dark text @click="snackbar = false">
        Close
      </v-btn>
    </v-snackbar>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Mixins } from "vue-property-decorator";

@Component
export default class Contact extends Vue {
  public valid = true;
  public name = "";
  public nameRules = [
    (v: string) => !!v || "Name is required",
    (v: string) =>
      (v && v.length <= 25) || "Name must be less than 25 characters"
  ];
  public email = "";
  public emailRules = [
    (v: string) => !!v || "E-mail is required",
    (v: string) => /.+@.+\..+/.test(v) || "E-mail must be valid"
  ];

  public snackbar = false;
  public snackbarMessage = "";
  public color = "primary";

  public message = "";
  public messageRules = [(v: string) => !!v.trim() || "Massage is required"];

  public showForm = true;

  public encode(data: { [key: string]: any }) {
    return Object.keys(data)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
      .join("&");
  }

  public async send() {
    this.valid = (this.$refs.contactForm as any).validate();

    if (!this.valid) return;

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: this.encode({
        "form-name": "contact-form",
        name: this.name,
        email: this.email,
        message: this.message
      })
    };

    return fetch("", options)
      .then(res => res.text())
      .then(_ => {
        this.snackbar = true;
        this.color = "primary";
        this.snackbarMessage =
          "Thank you! Your message has been successfully sent.";

        this.showForm = false;
      })
      .catch(err => {
        this.snackbar = true;
        this.color = "red";
        this.snackbarMessage = "Something went wrong.";
      });
  }
}
</script>

<style scoped lang="scss"></style>
