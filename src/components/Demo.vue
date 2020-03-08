<template>
  <v-card
    class="mx-auto ma-2"
    width="640"
    height="320"
    style="border-radius: 5px; box-shadow: 0px 10px 30px 0px rgba(0,0,0,0.75);"
    :dark="dark"
  >
    <v-navigation-drawer
      mini-variant
      permanent
      absolute
      style="width: 64px !important; border-radius: 5px 0 0 5px !important;"
    >
      <v-list dense nav class="py-0">
        <v-list-item class="px-1 py-1">
          <v-list-item-avatar class="ma-0">
            <v-icon>mdi-language-haskell</v-icon>
          </v-list-item-avatar>
        </v-list-item>

        <v-divider></v-divider>

        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-list-item v-on="on" class="px-3" link :to="{ name: 'Home' }">
              <v-list-item-icon>
                <v-icon>mdi-laptop-mac</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Home</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
          <span>Home</span>
        </v-tooltip>

        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-list-item v-on="on" class="px-3" link disabled>
              <v-list-item-icon>
                <v-icon>mdi-folder-google-drive</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Google Drive Sync</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
          <span>Drive</span>
        </v-tooltip>

        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-list-item v-on="on" class="px-3" link disabled>
              <v-list-item-icon>
                <v-icon>mdi-account-circle</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Account</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
          <span>Account</span>
        </v-tooltip>
      </v-list>

      <template v-slot:append>
        <v-list dense nav class="py-0" disabled>
          <v-tooltip top>
            <template v-slot:activator="{ on }">
              <v-list-item class="px-3" v-on="on" link>
                <v-list-item-icon>
                  <v-icon>mdi-cog</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>settings</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
            <span>Settings</span>
          </v-tooltip>
        </v-list>
      </template>
    </v-navigation-drawer>
    <div class="fill-height" style="position: relative; left: 64px;">
      <!-- Application bar -->
      <v-toolbar
        flat
        dense
        style="width: calc(100% - 64px); border-radius: 0 5px 0 0"
      >
        <v-toolbar-title class="subtitle-2 font-weight-medium"
          >Clipboard
          <v-subheader
            class="text-capitalize font-weight-bold pa-0 pt-1 pb-1 ma-0"
            style="height: 12px; font-size: 10px;"
            inset
            >{{ today }}</v-subheader
          >
        </v-toolbar-title>
        <v-spacer></v-spacer>

        <div style="display: flex; align-items: baseline;">
          <div class="subtitle-2 pa-1 font-weight-bold">
            {{ filteredItems.length }}
          </div>
          <div class="caption pa-1 font-weight-regular">
            Items
          </div>
        </div>
      </v-toolbar>
      <v-divider class="inset" style="width: calc(100% - 64px);"></v-divider>

      <!-- Content -->
      <v-container
        fluid
        pa-0
        ma-0
        :class="`container ${$vuetify.breakpoint.smAndDown ? 'small' : ''}`"
        ref="scroll-target"
        style="width: calc(100% - 64px); height: calc(100% - 98px);"
      >
        <v-list two-line subheader dense nav>
          <v-list-item
            v-for="item in filteredItems"
            :key="item.id"
            @click="onItemClick(item.id)"
          >
            <v-list-item-content>
              <v-list-item-title v-text="item.message"></v-list-item-title>
              <v-list-item-subtitle v-text="item.time"></v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action class="pa-0 pl-2 ma-0">
              <v-btn
                icon
                @click="onStarClick($event, item.id)"
                :color="item.starred ? 'primary' : undefined"
              >
                <v-icon>mdi-star</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-container>

      <!-- Dialog -->
      <v-snackbar
        v-model="snackbar"
        :color="dark === false ? 'primary' : 'grey darken-4'"
      >
        Copied to clipboard! Try with {{ shortcut }}
        <v-btn text @click="snackbar = false">Close</v-btn>
      </v-snackbar>

      <v-divider style="width: calc(100% - 64px);" />
      <!-- Search bar -->
      <v-toolbar
        bottom
        dense
        flat
        style="width: calc(100% - 64px); border-radius: 0 0 5px 0;"
      >
        <v-toolbar-items
          :class="`toolbar ${$vuetify.breakpoint.smAndDown ? 'small' : ''}`"
        >
          <v-text-field
            v-model="searchQuery"
            class="px-2 py-1 ma-0"
            label="Search..."
            prepend-inner-icon="mdi-magnify"
            clearable
            dense
            flat
            solo
            filled
          ></v-text-field>
        </v-toolbar-items>
        <v-spacer></v-spacer>
        <template>
          <v-tooltip top>
            <template v-slot:activator="{ on }">
              <v-btn
                icon
                v-on="on"
                @click="onlyStarred = !onlyStarred"
                :color="onlyStarred ? 'primary' : undefined"
              >
                <v-icon>mdi-star</v-icon>
              </v-btn>
            </template>
            <span>All categories</span>
          </v-tooltip>

          <v-menu
            transition="slide-y-transition"
            bottom
            :close-on-click="true"
            :close-on-content-click="true"
            nudge-width="150"
          >
            <template v-slot:activator="{ on }">
              <v-btn icon v-on="on">
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>
            <v-list dense :dark="dark">
              <v-list-item link :to="{ name: 'About' }">
                <v-list-item-avatar class="pa-0 ma-0">
                  <v-icon v-text="`mdi-information`" dense></v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>About Clips</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-menu>
        </template>
      </v-toolbar>
    </div>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class Demo extends Vue {
  public snackbar = false;
  public onlyStarred = false;
  public searchQuery = "";

  @Prop({ default: false })
  public dark!: boolean;

  public get today() {
    // prettier-ignore
    const months = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
    const day = ("0" + new Date().getDay()).substr(-2);
    const month = months[new Date().getMonth()];
    const year = new Date().getFullYear();
    return `${month} ${day} ${year}`;
  }

  public get shortcut() {
    return /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)
      ? "⌘ + V"
      : "Ctrl + V";
  }

  public get filteredItems() {
    const items = this.items.filter(
      (item) => (this.onlyStarred && item.starred) || !this.onlyStarred
    );

    return items.filter(
      (item) =>
        !this.searchQuery ||
        item.message.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  public onStarClick(event: Event, id: string) {
    event.stopPropagation();
    this.items = this.items.map((item) =>
      item.id === id ? { ...item, starred: !item.starred } : item
    );
  }

  public onItemClick(id: string) {
    const el = document.createElement("textarea");
    const item = this.items.find((item) => item.id === id)!;
    el.value = item.message;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    this.snackbar = true;
  }

  public items = [
    {
      id: "1",
      message:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
      starred: false,
      time: "2 mins ago",
    },
    {
      id: "2",
      message:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae",
      starred: true,
      time: "2 hours ago",
    },
    {
      id: "3",
      message:
        "It has survived not only five centuries, but also the leap into electronic",
      starred: false,
      time: "3 hours ago",
    },
    {
      id: "4",
      message:
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain",
      starred: false,
      time: "1 day ago",
    },
    {
      id: "5",
      message: "But I must explain to you how all this mistaken idea",
      starred: false,
      time: "1 month ago",
    },
  ];
}
</script>

<style scoped lang="scss">
.container {
  overflow: auto;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
