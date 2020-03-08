<template>
  <v-container fluid class="ma-0 pa-0">
    <div class="pa-2 caption text-center blue lighten-5">
      <a
        >Version 0.1.13 of <label class="font-weight-bold">Clips</label> is now
        available!
      </a>
    </div>

    <!-- Grid1 -->
    <v-img
      src="../assets/decorations.svg"
      class="fill-height mx-auto"
      max-width="2560"
    >
      <v-row justify="center" align="center" class="fill-height mb-12">
        <!-- Col1 -- my-12 for mobile-->
        <v-col sm="8" md="4">
          <v-card
            class="mx-8"
            flat
            color="rgba(248,252,255, 0)"
            min-width="320"
          >
            <div class="py-6" style="display: flex; justify-content: center;">
              <v-img
                src="../assets/logo_text.svg"
                max-width="120"
                height="48"
              ></v-img>
            </div>
            <v-card-text
              class="py-8 text-center"
              style="display: flex; justify-content: center; align-items: center; flex-direction: column;"
            >
              <div class="px-8 blue-grey--text text--darken-3">
                <p class="display-1 font-weight-bold">
                  Clipboard.
                </p>
                <p class="display-2 font-weight-black">Redefined.</p>
                <p class="subtitle-1 font-weight-light">
                  Light. Multiple features. Runs everywhere.
                </p>
              </div>

              <v-btn
                @click="downloadForWindows"
                class="mt-12 ma-2"
                height="50"
                width="240"
                color="primary"
              >
                Windows
                <v-icon right dark>mdi-microsoft-windows</v-icon>
              </v-btn>
              <v-btn
                @click="downloadForMac"
                class="ma-2"
                height="50"
                width="240"
              >
                Mac OS
                <v-icon right dark>mdi-apple</v-icon>
              </v-btn>
            </v-card-text>
          </v-card>
        </v-col>

        <!-- Col2 -->
        <v-col
          class="pa-0 fill-height"
          sm="6"
          md="8"
          :hidden="$vuetify.breakpoint.smAndDown"
        >
          <v-img
            class="fill-height"
            src="../assets/background.svg"
            contain
            min-height="750px"
            position="top right"
          ></v-img>
        </v-col>
      </v-row>
    </v-img>

    <!-- Card1-->
    <v-card
      :class="$vuetify.breakpoint.smAndDown ? 'mx-4 py-12' : 'mx-auto py-12'"
      flat
      max-width="1500"
    >
      <v-row>
        <v-col sm="12" md="6">
          <v-card
            class="pa-6"
            :min-height="$vuetify.breakpoint.smAndDown ? undefined : 481"
            flat
          >
            <v-card-subtitle
              class="overline blue-grey--text text--darken-2 text-center"
            >
              Available for Windows and mac OS
            </v-card-subtitle>
            <v-card-title
              class="display-1 blue-grey--text text--darken-1 font-weight-light text-center"
            >
              Simple, Reliable Clipboard
            </v-card-title>
            <v-card-text class="body-2 my-8 blue-grey--text text--darken-3">
              Clips is a universal clipboard app that automatically saves
              everything you copy. You can access your history at any moment
              from everywhere, and powered by Google Drive Clips constantly
              keeps in sync with all your devices.
            </v-card-text>
            <v-row class="px-8">
              <a class=" caption">
                ⚠️ Please note that
                <span class="font-weight-bold">Clips</span> is currently in
                beta, and there might be unknown issues. If you face any issues,
                feel free to report them.
              </a>
            </v-row>
          </v-card>
        </v-col>
        <v-col sm="12" md="6">
          <v-card
            color="pa-4"
            :min-height="$vuetify.breakpoint.smAndDown ? undefined : 481"
            flat
          >
            <v-card-subtitle
              class="overline blue-grey--text text--darken-2 text-center"
            >
              Clips App
            </v-card-subtitle>
            <v-img
              alt="Clips"
              class="shrink"
              contain
              src="../assets/app.png"
              transition="scale-transition"
              max-width="640"
              style="transform: perspective( 2500px ) rotateY( -35deg );"
            />
            <v-card-subtitle
              class="overline blue-grey--text text--darken-2 text-center"
            >
              Light theme
            </v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </v-card>

    <!-- Card2 -->
    <v-card
      :class="$vuetify.breakpoint.smAndDown ? 'mx-4 py-12' : 'mx-auto py-12'"
      color="grey lighten-5"
      flat
    >
      <v-row class="mx-auto" style="max-width: 1500px">
        <v-col sm="12" md="6" class="pa-0">
          <v-card
            class=" pa-6"
            color="transparent"
            :min-height="$vuetify.breakpoint.smAndDown ? undefined : 481"
            flat
          >
            <v-card-title
              class="display-1 blue-grey--text text--darken-1 font-weight-light text-center pt-6"
            >
              Clipboard
            </v-card-title>
            <v-card-text class="body-2 blue-grey--text text--darken-3">
              Bring a new perspective to Copy & Paste. You can find any item in
              a second from your clipboard history. And by signing-in to Google
              Drive you can keep in sync all your devices.
            </v-card-text>
            <v-card-subtitle
              class="overline blue-grey--text text--darken-2 text-center"
            >
              With Light and Dark themes
            </v-card-subtitle>
            <Demo
              style="transform: perspective( 3000px ) rotateY( 30deg );"
              dark
            />
          </v-card>
        </v-col>
        <v-col sm="12" md="6" class="pa-0">
          <v-card
            class="pa-6"
            color="transparent"
            :min-height="$vuetify.breakpoint.smAndDown ? undefined : 481"
            flat
          >
            <Demo style="transform: perspective( 3000px ) rotateY( -25deg );" />
            <v-card-subtitle
              class="overline blue-grey--text text--darken-2 text-center"
            >
              Search, filter, bookmark, and more...
            </v-card-subtitle>
            <v-card-title
              class="display-1 blue-grey--text text--darken-1 font-weight-light text-center pt-6"
            >
              An advanced search engine
            </v-card-title>
            <v-card-text class="body-2 blue-grey--text text--darken-3">
              Clips provides an advanced search engine, allowing you to find
              instantly among multiple types of format, such as text, pictures,
              html etc.
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-card>

    <!-- Card3 -->
    <v-card
      :class="$vuetify.breakpoint.smAndDown ? 'mx-4 py-12' : 'mx-auto py-12'"
      flat
      max-width="1500"
    >
      <v-row justify="center" align="center">
        <v-col class="container features">
          <v-card class="ma-auto" flat>
            <v-card-subtitle
              class="text-center font-weight-bold primary--text headline"
              >Multiple Formats</v-card-subtitle
            >
            <v-card-text class="text-center font-weight-light subtitle-1">
              Save many formats such as text, png, html, and
              more...</v-card-text
            >
          </v-card>
          <v-img
            src="../assets/features/artboard_1.svg"
            height="150"
            width="150"
          >
          </v-img>
        </v-col>
        <v-col class="container features">
          <v-img
            src="../assets/features/artboard_2.svg"
            height="150"
            width="150"
          >
          </v-img>
          <v-card-subtitle
            class="text-center font-weight-bold primary--text headline"
            >Starred</v-card-subtitle
          >
          <v-card-text class="text-center font-weight-light subtitle-1">
            Starred items are easy to find, easy to keep.</v-card-text
          >
        </v-col>
        <v-col class="container features">
          <v-card-subtitle
            class="text-center font-weight-bold primary--text headline"
            >Search</v-card-subtitle
          >
          <v-card-text class="text-center font-weight-light subtitle-1">
            Available for all formats, allows you to search among the entire
            history.</v-card-text
          >
          <v-img
            src="../assets/features/artboard_3.svg"
            width="150"
            height="150"
          >
          </v-img>
        </v-col>
        <v-col class="container features">
          <v-img
            src="../assets/features/artboard_4.svg"
            width="150"
            height="150"
          >
          </v-img>
          <v-card-subtitle
            class="text-center font-weight-bold primary--text headline"
            >Sync</v-card-subtitle
          >
          <v-card-text class="text-center font-weight-light subtitle-1">
            Constantly communicate with Google Drive, and keep in Sync your
            devices.</v-card-text
          >
        </v-col>
        <v-col class="container features">
          <v-card-subtitle
            class="text-center font-weight-bold primary--text headline"
            >Cleanup</v-card-subtitle
          >
          <v-card-text class="text-center font-weight-light subtitle-1">
            We care for your Privacy. You can remove all your data just in one
            click!</v-card-text
          >
          <v-img
            src="../assets/features/artboard_5.svg"
            width="150"
            height="150"
          >
          </v-img>
        </v-col>
      </v-row>
    </v-card>

    <!-- Card3 -->
    <v-card
      :class="
        $vuetify.breakpoint.smAndDown ? 'ma-4 pa-12' : 'mx-auto my-4 pa-12'
      "
      flat
      max-width="1500"
    >
      <v-row>
        <v-col justify="center" align="center">
          <div
            class="headline blue-grey--text text--darken-3 font-weight-light"
          >
            Simple. Secure. Fast.
          </div>

          <div class="my-5">
            <v-avatar width="200" height="200" color="primary">
              <div class="google-animation">
                <v-icon style="left: -230px" x-large dark
                  >mdi-google-drive</v-icon
                >
                <v-icon style="left: -130px" x-large dark>mdi-google</v-icon>
              </div>
            </v-avatar>
          </div>

          <div class="blue-grey--text text--darken-3">
            <div class="subtitle-2 text-uppercase">
              Continuous backup
            </div>
            <div class="caption">
              Powered by
              <span class=" font-weight-bold">Google Drive</span>
              <v-icon class="px-2" color="blue-grey">mdi-google-drive</v-icon>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Vue } from "vue-property-decorator";
import firebase from "firebase";
import Demo from "@/components/Demo.vue";

@Component({ components: { Demo } })
export default class Home extends Vue {
  public async downloadForWindows() {
    const pathReference = firebase.storage().ref("windows/Clips.exe");
    const downloadUrl: string = await pathReference.getDownloadURL();
    return this.download(downloadUrl, "windows");
  }

  public async downloadForMac() {
    const pathReference = firebase.storage().ref("mac/Clips.dmg");
    const downloadUrl: string = await pathReference.getDownloadURL();
    return this.download(downloadUrl, "macOS");
  }

  public async download(url: string, platform: string) {
    // const response = await fetch(downloadUrl);
    // const blob = new Blob([await response.blob()], {
    //   type: 'application/octet-stream'
    // });
    // const URL = window.URL;
    // const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.style.display = "none";
    a.setAttribute("href", url);
    a.setAttribute("download", "Clips" + ".exe");
    document.body.appendChild(a);
    a.dispatchEvent(new MouseEvent("click"));
    document.body.removeChild(a);
    setTimeout(() => {
      URL.revokeObjectURL(url);
    }, 100);
    this.$gtag.event("app-download", {
      // eslint-disable-next-line @typescript-eslint/camelcase
      event_category: "downloads",
      // eslint-disable-next-line @typescript-eslint/camelcase
      event_label: platform,
    });
  }
}
</script>

<style scoped lang="scss">
.container.features {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.google-animation {
  animation: animate 2s infinite;
  animation-delay: 0.3s;
  animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
  position: relative;
}

@keyframes animate {
  0% {
    left: 0px;
  }
  50% {
    left: 105px;
  }
  100% {
    left: 250px;
  }
}
</style>
