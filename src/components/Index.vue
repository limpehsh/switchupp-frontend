<template>
  <q-layout class="bg-grey-1">

    <!-- Top Toolbar / Navigation bar, not really navbar -->
    <div slot="header" class="toolbar bg-deep-orange-13">
      <button
        class="hide-on-drawer-visible"
        @click="$refs.mobiledrawer.open()"
      >
        <i>menu</i>
      </button>
      <q-toolbar-title :padding="0">
        <!-- Quasar Framework v{{$q.version}} -->
        <router-link to ="/">
          <div class="text-white">
            <img class="avatar" src="../assets/switchup-logo.png"> SwitchUp
          </div>
        </router-link>
      </q-toolbar-title>
    </div>

    <!-- Defailt Drawer/Sidebar -->
    <q-drawer ref="drawer">
      <div class="toolbar bg-deep-orange-12">
        <q-toolbar-title :padding="1">
            Sidebar
        </q-toolbar-title>
      </div>
      <div class="list platform-delimiter">
        <div class="list-header">
          <!-- header title not needed now I think -->
        </div>
          <router-link to="/about-us">
            <div class="tabcolors">
              <q-drawer-link icon="sentiment_very_satisfied">About Us</q-drawer-link>
            </div>
          </router-link>
          <router-link to="/feed">
            <div class="tabcolors">
              <q-drawer-link icon="timeline">Feed</q-drawer-link>
            </div>
          </router-link>
          <router-link to="/map">
            <div class="tabcolors">
              <q-drawer-link icon="map">Map</q-drawer-link>
            </div>
          </router-link>
          <router-link to="/profile">
            <div class="tabcolors">
              <q-drawer-link icon="account_circle">Profile</q-drawer-link>
            </div>
          </router-link>
          <router-link to="/report">
            <div class="tabcolors">
              <q-drawer-link icon="report_problem">Report</q-drawer-link>
            </div>
          </router-link>
          <router-link to="/settings">
            <div class="tabcolors">
              <q-drawer-link icon="settings">Settings</q-drawer-link>
            </div>
          </router-link>
          <router-link to="/sign-up">
            <div class="tabcolors">
              <q-drawer-link icon="play_for_work">Sign Up</q-drawer-link>
            </div>
          </router-link>
          <router-link to="/sign-in">
            <div class="tabcolors">
              <q-drawer-link icon="input">Sign In</q-drawer-link>
            </div>
          </router-link>
          <router-link to="/">
            <div class="tabcolors">
              <q-drawer-link icon="exit_to_app">Log Out</q-drawer-link>
            </div>
          </router-link>
      </div>
    </q-drawer>

    <!-- Mobile Drawer/Sidebar -->
    <q-drawer ref="mobiledrawer" class="hide-on-drawer-visible">
      <div class="toolbar bg-deep-orange-13">
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
      <div class="list platform-delimiter">
        <router-link to="/about-us">
          <div class="tabcolors">
            <q-drawer-link icon="sentiment_very_satisfied">About Us</q-drawer-link>
          </div>
        </router-link>
        <router-link to="/feed">
          <div class="tabcolors">
            <q-drawer-link icon="timeline">Feed</q-drawer-link>
          </div>
        </router-link>
        <router-link to="/map">
          <div class="tabcolors">
            <q-drawer-link icon="map">Map</q-drawer-link>
          </div>
        </router-link>
        <router-link to="/profile">
          <div class="tabcolors">
            <q-drawer-link icon="account_circle">Profile</q-drawer-link>
          </div>
        </router-link>
        <router-link to="/report">
          <div class="tabcolors">
            <q-drawer-link icon="report_problem">Report</q-drawer-link>
          </div>
        </router-link>
        <router-link to="/settings">
          <div class="tabcolors">
            <q-drawer-link icon="settings">Settings</q-drawer-link>
          </div>
        </router-link>
        <router-link to="/sign-up">
          <div class="tabcolors">
            <q-drawer-link icon="play_for_work">Sign Up</q-drawer-link>
          </div>
        </router-link>
        <router-link to="/sign-in">
          <div class="tabcolors">
            <q-drawer-link icon="input">Sign In</q-drawer-link>
          </div>
        </router-link>
        <router-link to="/">
          <div class="tabcolors">
            <q-drawer-link icon="exit_to_app">Log Out</q-drawer-link>
          </div>
        </router-link>
      </div>
    </q-drawer>

    <router-view class="layout-view"></router-view>

    <!-- FOOTER NOT READY YET -->

  </q-layout>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang="styl">
.tabcolors
  color #000
</style>
