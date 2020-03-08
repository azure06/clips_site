<template>
  <v-footer padless>
    <v-flex xs12>
      <v-card
        flat
        tile
        class="blue-grey--text text-center"
        color="blue-grey lighten-5"
      >
        <div class="grey lighten-5">
          <div
            class="pa-5 blue-grey--text text-darken-2 font-weight-black text-uppercase"
          >
            Keep in Touch
          </div>
          <v-divider />
          <SocialShare />
        </div>
        <v-card-text>
          <v-btn
            color="blue-grey"
            text
            rounded
            @click="$router.push({ name: 'Home' })"
            >Home</v-btn
          >
          <v-btn color="blue-grey" text rounded>Team</v-btn>
          <v-btn
            color="blue-grey"
            text
            rounded
            href="https://github.com/azure06/clips"
            target="_blank"
            rel="noopener"
            >GitHub</v-btn
          >
          <v-btn
            color="blue-grey"
            text
            rounded
            @click="$router.push({ name: 'About' })"
            >About</v-btn
          >
          <v-btn
            color="blue-grey"
            text
            rounded
            @click="$router.push({ name: 'Privacy' })"
            >Privacy</v-btn
          >
        </v-card-text>

        <div style="position: relative;">
          <v-img
            src="../assets/clips.svg"
            width="35"
            height="35"
            class="mx-6 my-2"
            style="filter: grayscale(1) opacity(0.4);"
          />
          <span
            class="overline font-weight-bold"
            style="position: absolute;  left: 65px; top: 10px"
            >Clips</span
          >
        </div>

        <v-card-text class="blue-grey--text pt-0 text-left caption">
          Released under MIT License | Copyright @ 2020</v-card-text
        >
        <v-divider></v-divider>

        <v-card-text class="blue-grey--text">
          {{ new Date().getFullYear() }} —
          <strong>Clips</strong>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-footer>
</template>

<script lang="ts">
import { Component, Vue, Mixins } from "vue-property-decorator";
import SocialShare from "./SocialShare.vue";
@Component({ components: { SocialShare } })
export default class Footer extends Vue {}
</script>
<style lang="scss" scoped></style>
