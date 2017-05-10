<!--
reportForm
component for reporting form

NOTE:
- v-once here can be removed later if it cause problems
- implement the post and get function for the form
-->

<template>
  <div class="formContent">
    <form>
      <h4 class="formHeader"> Reporting </h4>
      <div class="floating-label">
        <input required
               class = "full-width"
               name  = "title"
               maxlength = "100">
        <label>Title</label>
      </div>
      <div class="floating-label">
        <input required
               class = "full-width"
               name  = "detail"
               maxlength = "400">
        <label>Description</label>
      </div>
      <button class="form-btn primary raised">SUBMIT</button>
    </form>
  </div>
</template>


<script>
// necessary import for post/get
import Vue from 'vue'
import axios from 'axios'
import VAxios from 'vue-axios'
// currently commented out to silence linter
// import router from '../router'

Vue.use(VAxios, axios)

export default{
  name: 'reportForm',

  methods:
  {

  },

  data: function () {
    return {

    }
  }
}
</script>


<style>
.formContent
{
  padding: 15px 15px 15px 15px;
}
</style>
