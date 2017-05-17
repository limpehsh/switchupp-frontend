<template>
  <q-drawer>

    <!-- Header/Main Page Link -->
    <div class="toolbar bg-blue-9">
      <q-toolbar-title :padding="1">
          Sidebar
      </q-toolbar-title>
    </div>
    <!-- List of fields -->
    <div class="list platform-delimiter">

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

      <div v-if="isLoggedIn()">
        <router-link to="/my-posts">
          <div class="tabcolors">
            <q-drawer-link icon="account_circle" to="/my-posts">My Posts</q-drawer-link>
          </div>
        </router-link>
      </div>


      <!-- <router-link to="/report">
        <div class="tabcolors">
          <q-drawer-link icon="report_problem" to="/report">Report</q-drawer-link>
        </div>
      </router-link> -->

      <!-- <router-link to="/settings">
        <div class="tabcolors">
          <q-drawer-link icon="settings" to="/settings">Settings</q-drawer-link>
        </div>
      </router-link> -->
      <div class="item item-link" @click="openSettings">
        <i class="item-primary">settings</i>
        <div class="item-content">Settings</div>
      </div>

      <!-- USELESS NOW <router-link to="/sign-up">
        <div class="tabcolors">
          <q-drawer-link icon="play_for_work" to="/sign-up">Sign Up</q-drawer-link>
        </div>
      </router-link>

      <router-link to="/sign-in">
        <div class="tabcolors">
          <q-drawer-link icon="input" to="/sign-in">Sign In</q-drawer-link>
        </div>
      </router-link> -->

      <!-- for account form-->
      <!--<div class="item item-link" @click="openAcc">
        <i class="item-primary">person_pin</i>
        <div class="item-content">Log In/Sign Up</div>
      </div>-->
      <div class="item item-link" @click="openReport">
        <i class="item-primary">report_problem</i>
        <div class="item-content">Report Form</div>
      </div>

      <router-link to="/about-us">
        <div class="tabcolors">
          <q-drawer-link icon="sentiment_very_satisfied" to="/about-us">About Us</q-drawer-link>
        </div>
      </router-link>
      <!-- <router-link to="/">
        <div class="tabcolors">
          <q-drawer-link icon="exit_to_app" to="/log-out">Log Out</q-drawer-link>
        </div>
      </router-link> -->

    </div>
  </q-drawer>
</template>

<script>
import { Cookies, Dialog } from 'quasar'
export default {
  name: 'maindrawer',
  data () {
    return {
      logged_in: false
    }
  },
  methods: {
    // show the form for logging in/sign up
    // openAcc: function () {
      // a way to acces accForm method, there might be a better way to do this
      // this.$parent.$parent.$refs.accountForm.open()
    // },
    // shw the form for reporting
    openReport: function () {
      if (Cookies.has('session_loggedin')) {
        this.$parent.$parent.$refs.reportForm.open()
        this.logged_in = true
      }
      else {
        this.reportAlert()
        this.logged_in = false
      }
    },
    openSettings: function () {
      if (Cookies.has('session_loggedin')) {
        this.$parent.$parent.$refs.settingsForm.open()
        this.logged_in = true
      }
      else {
        this.settingsAlert()
        this.logged_in = false
      }
    },
    isLoggedIn () {
      if (Cookies.has('session_loggedin')) {
        this.logged_in = true
      }
      else {
        this.logged_in = false
      }
      return this.logged_in
    },
    reportAlert () {
      Dialog.create({
        title: 'Alert',
        message: 'You cannot file a report if you are not signed in, brah.'
      })
    },
    settingsAlert () {
      Dialog.create({
        title: 'Alert',
        message: 'You cannot view your own settings if you are not signed in, brah.'
      })
    }
  }
}
</script>

<style>
.qDrawerMimic
{

}
</style>
