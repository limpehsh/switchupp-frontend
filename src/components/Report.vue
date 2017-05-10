<template>
  <div>
    <div class="layout-padding content">
    <!--  <p><strong>{{posts.email}}</strong></p>
      <ul v-if="posts && posts.length">
        <li v-for="post of posts">
          <p><strong>{{post.title}}</strong></p>
          <p>{{post.body}}</p>
        </li>
      </ul>

      <ul v-if="errors && errors.length">
        <li v-for="error of errors">
          {{error.message}}
        </li>
      </ul> -->
      <div class="header">
        <h1>Report Incident</h1>
      </div>

      <form method="post" action="http://localhost:3001/report/" @submit.prevent="createPost">
        <div class="card bg-grey-2">
          <!-- Title -->
          <div class="floating-label">
            <input v-model.trim="title" required class="full-width"
             @input="$v.title.$touch()" type="text">
            <label>Title</label>
          </div>
          <!-- Location -->
          <div class="floating-label">
            <input v-model.trim="location" required class="full-width"
             @input="$v.location.$touch()" type="text">
            <label>Location</label>
          </div>
          <!-- Description -->
          <div class="floating-label">
            <input v-model.trim="desc" required class="full-width"
             @input="$v.desc.$touch()" type="text">
            <label>Description</label>
            <br/><br/>
          </div>

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
        </div>
        <br>
      <!-- Sign Up Button -->
      <div class="content">
        <button type="submit" class="pink round items-center">Submit</button>
      </div>
    </form>

    </div>
  </div>
</template>

<script>

/* For Axios */
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

/* For the form, not really used since errors display on default... */
import { required } from 'vuelidate/lib/validators'

/* For routing */
import router from '../router'

export default {
//  data: () => ({
  //  posts: [],
  //  errors: [],
  //  image: ''
//  }),
  data () {
    return {
      title: '',
      location: '',
      desc: '',
      image: ''
    }
  },
  // Fetches posts when the component is created.
  /* created () {
    // http://jsonplaceholder.typicode.com/posts
    axios.get('http://localhost:3001/user/email/test@testing101.com')
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
  }, */
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
        author: 'testing-phase',
        image: this.image,
        votescore: 0,
        createdAt: Date(),
        visible: true
      })
      router.push('feed')
    }
  }
}
</script>

<style scoped>
.header
{
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Times New Roman", Times, serif;
  font-style: italic;
}

.content
{
  display:flex;
  flex-direction: column;
  align-items: center;
}

img {
  width: 30%;
  margin: auto;
  display: block;
  margin-bottom: 10px;
}

.formContainer
{
  /* for beautifying the box */
  background-color: #F6F6F6;
  padding: 70px 50px 50px 50px;
  -webkit-box-shadow: 1px 1px 6px 0.5px rgba(194,194,194,1);
  -moz-box-shadow: 1px 1px 6px 0.5px rgba(194,194,194,1);
  box-shadow: 1px 1px 6px 0.5px rgba(194,194,194,1);

  display:flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  width: 50vw;
  height: 50vh;
}
</style>
