<template>
  <q-layout view="hhr Lpr lff">

  <!-- optional -->
  <q-layout-header>
    <!-- content; any -->
    <q-toolbar>
      <!-- showLeft is a model attached to left side drawer below -->
      <q-btn
        flat round dense
        @click="left = !left"
        icon="menu"
      />

      <q-toolbar-title>
        Layout Header
        <span slot="subtitle">Optional subtitle</span>
      </q-toolbar-title>

      <!-- showRight is a model attached to right side drawer below -->
      <q-btn
        flat round dense
        @click="right = !right"
        icon="menu"
      />
    </q-toolbar>

    <!-- Second row of header is a QTabs -->
    <q-tabs>
      <q-route-tab slot="title" icon="view_quilt" to="/test-layout/about" replace hide="icon" label="About" />
      <q-route-tab slot="title" icon="view_day" to="/test-layout/toolbar" replace hide="icon" label="Toolbar" />
      <q-route-tab slot="title" icon="view_day" to="/test-layout/tabs" replace label="Tabs" />
      <q-route-tab slot="title" icon="input" to="/test-layout/drawer" replace label="Drawer" />
    </q-tabs>
  </q-layout-header>

  <!-- optional -->
  <q-layout-drawer side="left" v-model="left">
    <q-list no-border link inset-separator>
      <q-list-header>Essential Links</q-list-header>
      <q-item to="/docs">
        <q-item-side icon="school" />
        <q-item-main label="Docs" sublabel="quasar-framework.org" />
      </q-item>
      <q-item to="/forum">
        <q-item-side icon="record_voice_over" />
        <q-item-main label="Forum" sublabel="forum.quasar-framework.org" />
      </q-item>
      <q-item to="/chat">
        <q-item-side icon="chat" />
        <q-item-main label="Discord Chat Channel" sublabel="https://discord.gg/5TDhbDg" />
      </q-item>
      <q-item to="/twitter">
        <q-item-side icon="rss feed" />
        <q-item-main label="Twitter" sublabel="@quasarframework" />
      </q-item>
    </q-list>
  </q-layout-drawer>

  <!-- optional -->
  <q-layout-drawer side="right"  v-model="right">
     Right Side of Layout
  </q-layout-drawer>

  <!-- REQUIRED -->
  <q-page-container>
    <router-view />
  </q-page-container>

  <!-- optional -->
  <q-layout-footer>
    <q-toolbar-title>
      Layout Footer
    </q-toolbar-title>
  </q-layout-footer>
</q-layout>
</template>

<script>
export default {
  data () {
    return {
      search: null,
      left: true,
      right: true
    }
  },
  components: {
  },
  computed: {
  }
}
</script>
