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
      <button class="btn-border" @click="clickLogIn">
        <i>input</i>
        Log In
      </button>
      <button class="btn-border" @click="clickSignUp">
        <i>play_for_work</i>
        Sign Up
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

    <router-view class="layout-view"></router-view>


    <!-- FOOTER NOT READY YET -->

  </q-layout>
</template>

<script>
// other components imports
import accForm from './accForm'
import Maindrawer from './MainDrawer'
import Mobiledrawer from './MobileDrawer'
import reportForm from './reportForm'
import { Cookies } from 'quasar'
Cookies.set('session_user', 'cookie_value', {
  path: '/'
})

export default {
  components: {
    Maindrawer,
    Mobiledrawer,
    accForm,
    reportForm
  },

  data () {
    return {}
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
