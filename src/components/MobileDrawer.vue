<template>
  <div>
    <div class="toolbar bg-blue-10">
      <!-- For the Close Button, screw that for now
      <button
        class="hide-on-drawer-visible"
        @click="$refs.mobiledrawer.close()"
      >
        <i>menu</i>
      </button>
      -->
      <q-toolbar-title :padding="0">
        <router-link to ="/">
          <div class="text-white">SwitchUp</div>
        </router-link>
      </q-toolbar-title>
    </div>
    <div class="list platform-delimiter">
      <div class="list-header">
        <!-- header title not needed now I think -->
      </div>
      <router-link to="/about-us">
        <div class="tabcolors">
          <q-drawer-link icon="sentiment_very_satisfied" to="/about-us">About Us</q-drawer-link>
        </div>
      </router-link>
      <router-link to="/feed">
        <div class="tabcolors">
          <q-drawer-link icon="timeline" to="/feed">Feed</q-drawer-link>
        </div>
      </router-link>
      <router-link to="/map">
        <div class="tabcolors">
          <q-drawer-link icon="map" to="/map">Map</q-drawer-link>
        </div>
      </router-link>
      <router-link to="/profile">
        <div class="tabcolors">
          <q-drawer-link icon="account_circle" to="/profile">Profile</q-drawer-link>
        </div>
      </router-link>
      <router-link to="/report">
        <div class="tabcolors">
          <q-drawer-link icon="report_problem" to="/report">Report</q-drawer-link>
        </div>
      </router-link>
      <router-link to="/settings">
        <div class="tabcolors">
          <q-drawer-link icon="settings" to="/settings">Settings</q-drawer-link>
        </div>
      </router-link>
      <router-link to="/sign-up">
        <div class="tabcolors">
          <q-drawer-link icon="play_for_work" to="/sign-up">Sign Up</q-drawer-link>
        </div>
      </router-link>
      <router-link to="/sign-in">
        <div class="tabcolors">
          <q-drawer-link icon="input" to="/sign-in">Sign In</q-drawer-link>
        </div>
      </router-link>
      <router-link to="/">
        <div class="tabcolors">
          <!-- Log Out parens placeholder -->
          <q-drawer-link icon="exit_to_app" to="/log-out">Log Out</q-drawer-link>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style>
</style>
s
