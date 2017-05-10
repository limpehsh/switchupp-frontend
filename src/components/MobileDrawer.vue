<template>
  <div>

    <!-- Header/Main Page Link -->
    <div class="toolbar bg-blue-10">
      <q-toolbar-title :padding="0">
        <router-link to ="/">
          <div class="text-white">SwitchUp</div>
        </router-link>
      </q-toolbar-title>
    </div>

    <!-- List of fields -->
    <div class="list platform-delimiter">

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

      <!-- <router-link to="/profile">
        <div class="tabcolors">
          <q-drawer-link icon="account_circle" to="/profile">Profile</q-drawer-link>
        </div>
      </router-link> -->

      <router-link to="/report">
        <div class="tabcolors">
          <q-drawer-link icon="report_problem" to="/report">Report</q-drawer-link>
        </div>
      </router-link>

      <!-- <router-link to="/settings">
        <div class="tabcolors">
          <q-drawer-link icon="settings" to="/settings">Settings</q-drawer-link>
        </div>
      </router-link> -->

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


      <!-- for account form-->
      <div class="item item-link" @click="openAcc">
        <i class="item-primary">person_pin</i>
        <div class="item-content">Account</div>
      </div>
      <div class="item item-link" @click="openReport">
        <i class="item-primary">person_pin</i>
        <div class="item-content">Report</div>
      </div>

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
  },
  methods: {
    // show the form for logging in/sign up
    openAcc: function () {
      // a way to acces accForm method, there might be a better way to do this
      this.$parent.$parent.$parent.$refs.accountForm.open()
    },
    // shw the form for reporting
    openReport: function () {
      this.$parent.$parent.$parent.$refs.reportForm.open()
    }
  }
}
</script>

<style>
</style>
