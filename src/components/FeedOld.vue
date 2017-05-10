<template>
  <div>
    <div class="layout-padding">
<<<<<<< HEAD
      <!--<p><strong>{{posts.title}}</strong></p>
      <p><strong>{{posts.locname}}</strong></p>
      <p><strong>{{posts.desc}}</strong></p>
      <p><strong>{{posts.user}}</strong></p>
      <p><strong>{{posts.image}}</strong></p>-->
      <img :src="posts.image" />
      <!-- Uploaded Image of Incident-->
      <div v-if="!image">
        <input type="file" accept="image/*" @change="onFileChange">
      </div>
      <div v-else>
        <img :src="image" />
        <br/>
        <button class="negative" @click="removeImage">Remove image</button>
        <br/><br/><br/>
      </div>
      <div class="content">
        <h1>Incident Feed</h1>
        <div class="card bg-light">
=======
      <div class="feedContent">
        <h2 class="feedHeader">Incident Feed</h2>

        <div class="feedStream">
          <PostBox v-for="post in postPool" :key="post.id"/>
>>>>>>> newComponent
        </div>
      </div>

      <!-- button for back to top -->
      <button v-back-to-top.animate="{offset: 500, duration: 200}"
              class="primary circular fixed-bottom-right animate-pop"
              style="margin: 0 15px 15px 0" >
         <i>keyboard_arrow_up</i>
      </button>

      <!-- <a v-back-to-top.animate="1000"
         class="animate-pop play-backtotop non-selectable">
         Back to top
      </a> -->
    </div>
  </div>
</template>

<script>

/* For Axios */
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

import PostBox from './PostBox'

// placeholder, replace later with continuous post extraction from the db
var postPool = {
  a: {
    id: '123'
  },
  b: {
    id: '124'
  },
  c: {
    id: '125'
  },
  d: {
    id: '126'
  },
  e: {
    id: '127'
  },
  f: {
    id: '128'
  },
  g: {
    id: '129'
  }
}

export default {
  components:
  {
    PostBox
  },

  data () {
    return {
<<<<<<< HEAD
      avtr: avtr,
      usrnm: usrnm,
      ctn: ctn,
      flag: flag,
      imgs: avtr,
      image: ''
    }
  },
  onFileChange (e) {
    var files = e.target.files || e.dataTransfer.files
    if (!files.length) {
      return
=======
      postPool
>>>>>>> newComponent
    }
    this.createImage(files[0])
  },
  createImage (file) {
    var image = posts.image
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
  created () {
    // http://jsonplaceholder.typicode.com/posts
    axios.get('http://localhost:3001/report/5912b1739f222808f0b7b114')
    .then(response => {
      // JSON responses are automatically parsed.
      this.posts = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })

    // async / await version (created() becomes async created())
    //
    // try {
    //   const response = await axios.get(`http://jsonplaceholder.typicode.com/posts`)
    //   this.posts = response.data
    // } catch (e) {
    //   this.errors.push(e)
    // }
  }
}
</script>

<style>
.feedContent
{
  display:flex;
  flex-direction: column;
  align-content: center;
}

.feedHeader
{
  text-align: center;
  font-weight:400;

}

.feedStream
{

}

</style>
