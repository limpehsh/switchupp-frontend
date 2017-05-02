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
      <!-- header title not needed now I think -->
      <!--
      <div class="list-header">
        Header
      </div>
      -->

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

      <!-- Testing Dialogs -->
      <div
        class="item item-link"
        v-for="dialog in form"
        @click="dialog.handler()"
      >
        <i class="item-primary">{{dialog.icon}}</i>
        <div class="item-content has-secondary">
          <div>{{dialog.label}}</div>
        </div>
      </div>

    </div>
  </q-drawer>
</template>

<script>
import { Dialog, Toast } from 'quasar'
export default {
  name: 'maindrawer',
  data () {
    return {
      form: [
        {
          label: 'Sign Up Test',
          icon: 'help',
          handler () {
            Dialog.create({
              title: 'Sign Up',
              message: 'Sign Up Page!',
              form: {
                name: {
                  type: 'textbox',
                  label: 'Textbox',
                  model: ''
                },
                age: {
                  type: 'numeric',
                  label: 'Numeric',
                  model: 13,
                  min: 13,
                  max: 90
                },
                tags: {
                  type: 'chips',
                  label: 'Chips',
                  model: ['Joe', 'John']
                },
                comments: {
                  type: 'textarea',
                  label: 'Textarea',
                  model: ''
                }
              },
              buttons: [
                'Cancel',
                {
                  label: 'Ok',
                  handler (data) {
                    Toast.create('Returned ' + JSON.stringify(data))
                  }
                }
              ]
            })
          }
        },
        {
          label: 'Single Selection',
          icon: 'radio_button_checked',
          handler () {
            Dialog.create({
              title: 'Radios',
              message: 'Message can be used for all types of Dialogs.',
              form: {
                option: {
                  type: 'radio',
                  model: 'opt1',
                  items: [
                    {label: 'Option 1', value: 'opt1'},
                    {label: 'Option 2', value: 'opt2'},
                    {label: 'Option 3', value: 'opt3'}
                  ]
                }
              },
              buttons: [
                'Cancel',
                {
                  label: 'Ok',
                  handler (data) {
                    Toast.create('Returned ' + JSON.stringify(data))
                  }
                }
              ]
            })
          }
        },
        {
          label: 'Multiple Selection',
          icon: 'check_box',
          handler () {
            Dialog.create({
              title: 'Checkbox & Toggle',
              message: 'Message can be used for all types of Dialogs.',
              form: {
                header1: {
                  type: 'heading',
                  label: 'Checkboxes'
                },
                group1: {
                  type: 'checkbox',
                  items: [
                    {label: 'Option 1', value: 'opt1', model: true},
                    {label: 'Option 2', value: 'opt2', model: false},
                    {label: 'Option 3', value: 'opt3', model: false}
                  ]
                },
                header2: {
                  type: 'heading',
                  label: 'Toggles'
                },
                group2: {
                  type: 'toggle',
                  items: [
                    {label: 'Option 1', value: 'opt1', model: true},
                    {label: 'Option 2', value: 'opt2', model: false},
                    {label: 'Option 3', value: 'opt3', model: false}
                  ]
                }
              },
              buttons: [
                'Cancel',
                {
                  label: 'Ok',
                  handler (data) {
                    Toast.create('Returned ' + JSON.stringify(data))
                  }
                }
              ]
            })
          }
        }
      ]
    }
  }
}
</script>

<style>
</style>
