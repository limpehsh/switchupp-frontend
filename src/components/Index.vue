<template>
  <q-layout class="bg-grey-1" ref="Index">

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
            <img class="avatar" src="../assets/switchup-logo-new.png"> SwitchUpp
          </div>
        </router-link>
      </q-toolbar-title>
      <button v-if="!setLoginStatus()" class="btn-border" @click="clickLogIn">
        Log In
      </button>
      <button v-if="!setLoginStatus()" class="btn-border" @click="clickSignUp">
        Sign Up
      </button>
      <button v-if="setLoginStatus()" class="btn-border" @click="clicklogOut">
        <i>exit_to_app</i>
        Log Out
      </button>
    </div>
    <!-- Mobile Drawer -->
    <q-drawer ref="mobiledrawer" class="hide-on-drawer-visible">
      <mobiledrawer></mobiledrawer>
    </q-drawer>

    <!-- Default/Main Drawer -->
    <maindrawer></maindrawer>
    <!-- form sections -->

    <!-- for forms -->
    <q-modal ref="accountForm">
             <!--@close="resetForm">-->
      <accForm ref='accountType' :login='true'/>
    </q-modal>
    <q-modal ref="reportForm">
        <reportForm />
    </q-modal>
    <q-modal ref="settingsForm">
        <settingsForm />
    </q-modal>

    <router-view class="layout-view"></router-view>


    <!-- FOOTER NOT READY YET -->

  </q-layout>
</template>

<script>
// other components imports
import settingsForm from './Settings'
import accForm from './accForm'
import Maindrawer from './MainDrawer'
import Mobiledrawer from './MobileDrawer'
import reportForm from './reportForm'
import { Cookies } from 'quasar'
Cookies.set('not_logged_in', 'no_login', {
  path: '/'
})

export default {
  components: {
    Maindrawer,
    Mobiledrawer,
    accForm,
    reportForm,
    settingsForm
  },

  data () {
    return {
      logged_in: false
    }
  },
  methods:
  {
    // resets the form type
    resetForm: function () {
      this.$refs.accountType.resetType()
    },
    // show the form for logging in/sign up
    clickSignUp: function () {
      this.$refs.accountType.falseType()
      this.$refs.accountForm.open()
    },
    clickLogIn: function () {
      this.$refs.accountType.trueType()
      this.$refs.accountForm.open()
    },
    clicklogOut () {
      Cookies.remove('session_loggedin')
      this.setLoginStatus()
    },
    // check if user is logged in or not
    setLoginStatus: function () {
      if (!Cookies.has('session_loggedin')) {
        this.logged_in = false
      }
      else {
        this.logged_in = true
      }
      return this.logged_in
    }
  }
}
</script>

<style lang="scss">

.tabcolors {
  color: #000;
}

.btn-border {
  border-style: solid;
  border-width: 1px;
}
</style>
