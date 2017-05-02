<template>
  <div>
    <div class="layout-padding">
        <div
          class="item item-link"
          v-for="dialog in form"
          @click="dialog.handler()"
        >
          <i class="item-primary">{{dialog.icon}}</i>
          <div class="item-content has-secondary">
            <div>{{dialog.label}}</div>
          </div>
          <i class="item-secondary">keyboard_arrow_right</i>
        </div>
    </div>
  </div>
</template>

<script>
import { Dialog, Toast } from 'quasar'
export default {
  data () {
    return {
      form: [
        {
          label: 'Textfields',
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
