<template>
  <div>
    <div class="layout-padding">
      <button v-if="this.newestShown" class="primary raised" @click='getMostVoted()'>View Most Voted</button>
      <button v-else class="negative raised" @click='getNewest()'>View Most Recent</button>
      <div class="feedContent">
        <h2 class="feedHeader">Incident Feed</h2>
        <!-- START -->
        <div class="feedStream">
          <!-- commented out temporarily -->
          <!-- <PostBox v-for="post of posts" :key="post._id"/> -->
          <ul v-if="posts && posts.length">
            <li v-for="post of posts">
              <p><strong>{{post.title}}</strong></p>
              <p><strong>Location:</strong> {{post.locname}}</p>
              <img :src='post.image' />
              <p><strong>Description:</strong> {{post.desc}}</p>
              <p><strong>Vote Score:</strong> {{post.votescore}}</p>
              <p><strong>Created by</strong> {{post.author}} at {{post.createdAt}}</p>
            </li>
          </ul>
        </div>
        <!-- END -->
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
// necessary import for post/get
import Vue from 'vue'
import axios from 'axios'
import VAxios from 'vue-axios'
// posts
import PostBox from './PostBox'

Vue.use(VAxios, axios)

export default {
  components:
  {
    PostBox
  },

  data () {
    return {
      posts: [],
      errors: [],
      newestShown: false
    }
  },
  // Start with fetching newest reports when loading feed
  created () {
    this.getNewest()
  },
  methods: {
    getNewest () {
      axios.get('http://localhost:8081/report/newest/')
      .then(response => {
        // JSON responses are automatically parsed.
        this.posts = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
      this.newestShown = true

      // async / await version (created() becomes async created())
      //
      /* try {
         const response = await axios.get(`http://localhost:8081/report/newest/`)
         this.posts = response.data
       } catch (e) {
         this.errors.push(e)
       } */
    },
    // this will prob be implemented as a button to switch up report look
    getMostVoted () {
      axios.get('http://localhost:8081/report/most-voted/')
      .then(response => {
        // JSON responses are automatically parsed.
        this.posts = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
      this.newestShown = false
    }
  }
}
</script>

<style>
img
{
  width: 300px;
}
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
