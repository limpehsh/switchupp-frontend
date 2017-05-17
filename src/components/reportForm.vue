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
                 v-model.trim="title">
          <label>Title</label>
        </div>

        <!-- Location -->
        <div class="floating-label form-field">
          <input required
                 @keydown = 'getAddress()'
                 class = "full-width"
                 name  = "location"
                 v-model.trim="location">
          <label>Location</label>
          <q-popover ref="popover">
            <div class="list item-delimiter highlight" v-for="prima in results">
              <div
                class="item item-link"
                @keydown="changeLoc(prima), $refs.popover.close()"
              >
              {{prima.display_name}}
              </div>
            </div>
          </q-popover>

        </div>

        <!-- Description -->
        <div class="floating-label form-field">
          <textarea required
                    class="textField full-width"
                    v-model.trim="desc">
          </textarea>
          <label>Description</label>
        </div>

        <!-- Uploaded Image of Incident-->
        <div v-if="!image">
          <input type="file" accept="image/*" @change="onFileChange">
          <!-- <button class="primary" @click="getFile">Upload Image</button>-->
          <!-- this is your file input tag, so i hide it!-->
          <!-- <div style='height: 0px;width:0px; overflow:hidden;'>
            <input id="upfile" type="file" accept="image/*" value="upload" @change="onFileChange"/>
          </div>-->
        </div>
        <div v-else>
          <img :src="image" />
          <button class="negative remove-img-btn" @click="removeImage">Remove image</button>
          <br /><br /><br />
        </div>
        <br /><br /><br />
        <!--Submit Button -->
        <div class="form-btn-container">
          <button type="submit" class="form-btn primary raised round">SUBMIT</button>
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
import { Cookies } from 'quasar'
// for getting geolocation data
import * as Nominatim from 'nominatim-browser'

Vue.use(VAxios, axios)
export default {
  name: 'reportForm',

  data () {
    return {
      title: '',
      location: '',
      desc: '',
      image: '',
      result: {},
      results: []
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
    getFile () {
      document.getElementById('upfile').click()
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
      axios.post('http://localhost:8081/report/', {
        title: this.title,
        locname: this.result.display_name,
        lat: this.result.lat,
        lon: this.result.lon,
        coords: [this.result.lat, this.result.lon],
        desc: this.desc,
        author: Cookies.get('session_loggedin'),
        category: 'others', // Placeholder, will have dropdown/popover to select proper category
        image: this.image,
        votescore: 0,
        voteuserAll: [],
        voteuserUp: [],
        voteuserDown: [],
        createdAt: Date(),
        visible: true
      })
      this.title = ''
      this.location = ''
      this.desc = ''
      this.image = ''
      this.$parent.$parent.$parent.$refs.reportForm.close()
      router.push('feed')
    },
    async getAddress () {
      var results = await Nominatim.geocode({
        q: this.location,
        countrycodes: 'au',
        limit: 5,
        addressdetails: true,
        timeout: 5000
      })
      this.results = results
    },
    changeLoc (prima) {
      this.result = prima
      this.location = prima.display_name
      console.log(this.result.display_name)
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
