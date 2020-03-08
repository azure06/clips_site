<template>
  <v-container fluid class="ma-0 pa-0">
    <v-card flat tile>
      <v-img
        class="white--text align-end"
        max-height="320"
        style="filter: hue-rotate(175deg)"
        src="../assets/premium.jpg"
      >
        <v-card-title class="display-2 font-weight-thin">Premium</v-card-title>
        <v-card-subtitle class="font-weight-bold white--text"
          >Upgrade to Premium</v-card-subtitle
        >
      </v-img>
    </v-card>

    <!-- Card1-->
    <v-card
      :class="$vuetify.breakpoint.smAndDown ? 'ma-4' : 'mx-auto'"
      flat
      max-width="1500"
    >
      <v-card
        color="blue lighten-5"
        class="mx-auto ma-4 my-12"
        :min-height="$vuetify.breakpoint.smAndDown ? undefined : 200"
        max-width="720"
        flat
      >
        <v-progress-linear
          v-if="isLoading"
          indeterminate
          color="cyan"
        ></v-progress-linear>
        <v-card-subtitle
          class="overline blue-grey--text text--darken-2 text-center"
        >
          Get Premium for <span class="font-weight-bold"> Free </span>
        </v-card-subtitle>
        <v-card-subtitle class="blue-grey--text text--darken-2 text-center">
          Get early access to our beta testing now! Input your email address and
          unlock premium features.
        </v-card-subtitle>
        <v-form v-if="showForm" v-model="valid" ref="form" class="pa-6">
          <v-text-field
            class="pa-4"
            prepend-inner-icon="mdi-email"
            v-model="email"
            :rules="emailRules"
            label="Email"
            required
            outlined
          ></v-text-field>
        </v-form>
        <div v-else>
          <v-card-subtitle class="text-center subtitle-1 font-weight-bold">
            WE SENT A CODE TO YOUR EMAIL ADDRESS
          </v-card-subtitle>
        </div>
        <v-card-actions>
          <v-spacer />
          <v-btn
            v-if="showForm"
            large
            color="cyan"
            dark
            depressed
            @click="send"
          >
            Send
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-card>

    <!-- Simple table -->
    <!-- <v-card class="mx-auto ma-6" max-width="1500" flat>
      <v-simple-table fixed-header>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left grey lighten-3">Cool</th>
              <th class="text-left blue darken-4 white--text">Name</th>
              <th class="text-left light-blue darken-2 white--text">
                Calories
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-left grey lighten-5">Caloris</td>
              <td class="blue darken-3 white--text">Caloris</td>
              <td class="light-blue darken-1 white--text">Caloris</td>
            </tr>
            <tr>
              <td class="text-left grey lighten-5">Caloris</td>
              <td class="blue darken-3 white--text">Caloris</td>
              <td class="light-blue darken-1 white--text">Caloris</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card> -->
  </v-container>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Vue, Mixins } from "vue-property-decorator";

@Component({ components: {} })
export default class Home extends Vue {
  public showForm = true;
  public valid = false;
  public email = "";
  public emailRules = [
    (v: string) => !!v || "E-mail is required",
    (v: string) => /.+@.+\..+/.test(v) || "E-mail must be valid"
  ];
  public isLoading = false;

  public encode(data: { [key: string]: any }) {
    return Object.keys(data)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
      .join("&");
  }

  public send() {
    this.valid = (this.$refs.form as any).validate();
    if (!this.valid) return;

    this.isLoading = true;
    return fetch(
      "https://us-central1-infiniti-clips.cloudfunctions.net/activateByEmail?" +
        this.encode({
          email: this.email
        }),
      {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      }
    )
      .then(result => {
        if (result.status === 200) {
          this.showForm = false;
        }
      })
      .finally(() => {
        this.isLoading = false;
      });
  }
}
</script>

<style scoped lang="scss">
.background {
  background: url("../assets/background.svg");
}
.security-animation {
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
