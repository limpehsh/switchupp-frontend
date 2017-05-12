<!--
reportForm
component for reporting form

NOTE:
- v-once here can be removed later if it cause problems
- implement the post and get function for the form
-->

<template>
  <form method="post" @submit.prevent="createPost">
    <div class="formContent">
        <h4 class="formHeader"> Reporting </h4>

        <!-- Title -->
        <div class="floating-label form-field">
          <input required
                 class = "full-width"
                 name  = "title"
                 maxlength = "100"
                 v-model.trim="title"
                 @input="$v.title.$touch()">
          <label>Title</label>
        </div>

        <!-- Location -->
        <div class="floating-label form-field">
          <input required
                 class = "full-width"
                 name  = "location"
                 v-model.trim="location"
                 @input="$v.location.$touch()">
          <label>Location</label>
        </div>

        <!-- Description -->
        <div class="floating-label form-field">
          <textarea required
                    class="textField full-width"
                    v-model.trim="desc"
                    @input="$v.desc.$touch()">
          </textarea>
          <label>Description</label>
        </div>

        <!-- Uploaded Image of Incident-->
        <div v-if="!image">
          <input type="file" accept="image/*" @change="onFileChange">
        </div>
        <div v-else>
          <img :src="image" />
          <button class="negative remove-img-btn" @click="removeImage">Remove image</button>
          <br /><br /><br />
        </div>
        <br /><br /><br />
        <!--Submit Button -->
        <div class="form-btn-container">
          <button type="submit" class="form-btn primary raised">SUBMIT</button>
        </div>

    </div>

  </form>
</template>


<script>
// necessary import for post/get
import Vue from 'vue'
import axios from 'axios'
import VAxios from 'vue-axios'
// for routing, pushing feed page after successful post
import router from '../router'
// For the form, not really used since errors display on default...
import { required } from 'vuelidate/lib/validators'
import { Cookies } from 'quasar'

Vue.use(VAxios, axios)
export default {
  name: 'reportForm',

  data () {
    return {
      title: '',
      location: '',
      desc: '',
      image: ''
    }
  },
  validations: {
    title: {
      required
    },
    location: {
      required
    },
    desc: {
      required
    },
    image: {
      required
    }
  },

  methods: {
    onFileChange (e) {
      var files = e.target.files || e.dataTransfer.files
      if (!files.length) {
        return
      }
      this.createImage(files[0])
    },
    createImage (file) {
      // var image = new Image()
      var reader = new FileReader()
      var vm = this

      reader.onload = (e) => {
        vm.image = e.target.result
      }
      reader.readAsDataURL(file)
    },
    removeImage: function (e) {
      this.image = ''
    },
    createPost () {
      axios.post('http://localhost:3001/report/', {
        title: this.title,
        locname: this.location,
        // location: [-37.7970795, 144.961302339626],
        desc: this.desc,
        author: Cookies.get('session_loggedin'),
        image: this.image,
        votescore: 0,
        createdAt: Date(),
        visible: true
      })
      this.title = ''
      this.location = ''
      this.desc = ''
      this.image = ''
      this.$parent.$parent.$parent.$refs.reportForm.close()
      router.push('feed')
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

}
.formContentAcc
{
  display         : flex;
  flex-direction  : column;
  justify-content : space-around;

  width  : 400px;
  height : 420px;

  padding: 15px 35px 15px 35px
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

img {
  width: 30%;
  margin: auto;
  display: block;
  margin-bottom: 10px;
}

.remove-img-btn
{
  display:block;
  width: 150px;
  margin-left: auto;
  margin-right: auto;
  position:absolute;
  bottom:125px;
  left:20px;
  right:20px;
}
</style>
