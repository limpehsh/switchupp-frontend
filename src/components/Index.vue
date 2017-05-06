<template>
  <q-layout class="bg-grey-1">

    <!-- Top Toolbar / Navigation bar, not really navbar so far -->
    <div slot="header" class="toolbar bg-blue-10">
      <button
        class="hide-on-drawer-visible"
        @click="$refs.mobiledrawer.open()"
      >
        <i>menu</i>
      </button>
      <q-toolbar-title :padding="0">
        <router-link to ="/">
          <div class="text-white">
            <img class="avatar" src="../assets/switchup-logo-new.png"> SwitchUp
          </div>
        </router-link>
      </q-toolbar-title>
    </div>

    <!-- Mobile Drawer -->
    <q-drawer ref="mobiledrawer" class="hide-on-drawer-visible">
      <!-- For the close button, screw that
      <div class="toolbar bg-blue-10">
        <button
          class="hide-on-drawer-visible"
          @click="$refs.mobiledrawer.close()"
        >
          <i>menu</i>
        </button>
        <q-toolbar-title :padding="0">
          <router-link to ="/">
            <div class="text-white">SwitchUp</div>
          </router-link>
        </q-toolbar-title>
      </div>
      -->
      <mobiledrawer></mobiledrawer>
    </q-drawer>

    <!-- Default/Main Drawer -->
    <maindrawer></maindrawer>

    <router-view class="layout-view"></router-view>

    <!-- FOOTER NOT READY YET -->

  </q-layout>
</template>

<script>
import accForm from './accForm'
import Maindrawer from './MainDrawer'
import Mobiledrawer from './MobileDrawer'
export default {
  components: {
    Maindrawer,
    Mobiledrawer,
    accForm
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss">
.tabcolors {
  color: #000;
}
</style>
