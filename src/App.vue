<template>
  <v-app>
    <v-app-bar app elevate-on-scroll color="grey lighten-5">
      <router-link
        v-if="!$vuetify.breakpoint.smAndDown"
        class="d-flex align-center mr-10"
        depressed
        :to="{ name: 'Home' }"
      >
        <v-img
          alt="Clips Logo"
          class="shrink ml-2"
          contain
          src="./assets/logo.svg"
          transition="scale-transition"
          width="110"
          height="28"
        />
      </router-link>
      <v-tabs
        background-color="grey lighten-5"
        :hide-slider="!$vuetify.breakpoint.smAndDown"
        show-arrows
      >
        <v-tab :to="{ name: 'Home' }">Features</v-tab>
        <v-tab :to="{ name: 'Premium' }">Premium</v-tab>
        <v-tab :to="{ name: 'Contact' }">Contact</v-tab>
        <v-tab :to="{ name: 'About' }">About</v-tab>
      </v-tabs>

      <v-spacer v-if="!$vuetify.breakpoint.smAndDown"></v-spacer>
      <v-btn
        v-if="!$vuetify.breakpoint.smAndDown"
        href="https://github.com/azure06/clips"
        rel="noopener"
        target="_blank"
        class=" blue-grey--text"
        text
        large
      >
        <span>GitHub</span>
      </v-btn>
    </v-app-bar>
    <v-content>
      <!-- Router View -->
      <router-view />
    </v-content>
    <Footer />
  </v-app>
</template>

<script lang="ts">
import Footer from "@/components/Footer.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({ components: { Footer } })
export default class Home extends Vue {}
</script>
