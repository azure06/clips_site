<template>
  <div class="container">
    <facebook :url="url" scale="2"></facebook>
    <twitter :url="url" title="Clips" scale="2"></twitter>
    <linkedin :url="url" scale="2"></linkedin>
    <telegram :url="url" scale="2"></telegram>
    <whats-app :url="url" title="Clips" scale="2"></whats-app>
    <pinterest :url="url" scale="2"></pinterest>
    <reddit :url="url" scale="2" title="GitHub"></reddit>
  </div>
</template>

<script lang="ts">
import {
  Facebook,
  Twitter,
  Linkedin,
  Pinterest,
  Reddit,
  Telegram,
  WhatsApp
  // eslint-disable-nextline
  // @ts-ignore
} from "vue-socialmedia-share";
import { Component, Vue, Mixins } from "vue-property-decorator";

@Component({
  components: {
    Facebook,
    Twitter,
    Linkedin,
    Pinterest,
    Reddit,
    Telegram,
    WhatsApp
  }
})
export default class SocialShare extends Vue {
  public url = "https://infiniticlips.com";
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.container {
  display: flex;
  justify-content: center;
}
.container > span {
  padding: 1em;
}
</style>
