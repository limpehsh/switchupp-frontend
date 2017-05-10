<!--
reportForm
component for reporting form

NOTE:
- v-once here can be removed later if it cause problems
- implement the post and get function for the form
-->

<template>
  <form>
    <div class="formContent">
        <h4 class="formHeader"> Reporting </h4>
        <div class="floating-label form-field">
          <input required
                 class = "full-width"
                 name  = "title"
                 maxlength = "100">
          <label>Title</label>
        </div>
        <div class="floating-label form-field">
          <!-- <input required
                 class = "full-width"
                 name  = "detail"
                 maxlength = "400">
           -->
          <textarea required class="textField full-width"></textarea>
          <label>Description</label>
        </div>

        <div form-btn-container>
          <button class="form-btn primary raised">SUBMIT</button>
        </div>

    </div>
  </form>
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


<style scoped>
.formContent
{
  /*display         : flex;
  flex-direction  : column;

  align-content   : center;*/

  padding: 15px 35px 15px 35px;
  position: relative;

  width  : 600px;
  height : 500px;
}

.formHeader
{
  text-align: center;
}

.form-field
{
  margin: 5px 0px 5px 0px
}

.textField
{
  max-height: 200px;
}

.form-btn-container
{

  margin-top: 20px;
  padding: 20px 5px 7px 5px;

}

.form-btn
{
  display:block;
  width: 250px;
  margin-left: auto;
  margin-right: auto;
  position:absolute;
  bottom:60px;
  left:20px;
  right:20px;
}
</style>
