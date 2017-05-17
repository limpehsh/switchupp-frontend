<template>
  <div>
    <div class="layout-padding">
      <!-- currently commented out, will remove later -->
      <!-- <button v-if="this.newestShown" class="primary raised" @click='getMostVoted()'>View Most Voted</button>
      <button v-else class="negative raised" @click='getNewest()'>View Most Recent</button> -->

      <div class="feedContent">
        <h2 class="feedHeader">Incident Feed</h2>
        <div class="feedStream">
          <div class="card bg-light streamHead">
            <div v-bind:class="{tabActive : newestShown}"
                 class="streamTab"
                 @click="getNewest()"
                 >
                 Recent
            </div>
            <div v-bind:class="{tabActive : !newestShown}"
                 class="streamTab"
                 @click="getMostVoted()"
                 >
                 Popular
            </div>
          </div>
          <PostBox v-for="post of posts" :postData="post" :key="post._id"/>
          <!-- <q-infinite-scroll ref="feedLoader" :handler="loadMore">
            <PostBox v-for="post of loaded" :postData="post" :key="post._id"/>
            <div v-if="checkLength" class="card bg-light cardLoader" style="margin-bottom: 50px;">
              all post here
            </div>
            <div class="card bg-light cardLoader" style="margin-bottom: 50px;">
              <spinner name="hourglass" slot="message" color="#A9AAAB" :size="63"></spinner>
            </div>
          </q-infinite-scroll> -->
        </div>
      </div>

      <!-- button for back to top -->
      <button v-back-to-top.animate="{offset: 500, duration: 200}"
              class="primary circular fixed-bottom-right animate-pop"
              style="margin: 0 15px 15px 0" >
         <i>keyboard_arrow_up</i>
      </button>

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

// var postPool = [
//   {
//     author: 'jim',
//     createdat: 'now',
//     desc: 'asdfasdfasdfasdfasdfjjwerlkuuasd;flkjaw eiwrjasdfjlaksdfu eqwrnmasdfhqwwer',
//     image: 'http://static1.1.sqspcdn.com/static/f/1542080/27517679/1491563820320/comicencourage.png?token=9put1R5etoFmo259xCeaWqgQI%2B8%3D',
//     locname: 'here',
//     title: 'test title',
//     visible: true,
//     votescore: 11,
//     _id: 1234
//   },
//   {
//     author: 'jim',
//     createdat: 'now',
//     desc: 'asdfasdfasdfasdfasdfjjwerlkuuasd;flkjaw eiwrjasdfjlaksdfu eqwrnmasdfhqwwer',
//     image: 'http://static1.1.sqspcdn.com/static/f/1542080/27517679/1491563820320/comicencourage.png?token=9put1R5etoFmo259xCeaWqgQI%2B8%3D',
//     locname: 'here',
//     title: 'test title',
//     visible: true,
//     votescore: 11,
//     _id: 1235
//   },
//   {
//     author: 'jim',
//     createdat: 'now',
//     desc: 'asdfasdfasdfasdfasdfjjwerlkuuasd;flkjaw eiwrjasdfjlaksdfu eqwrnmasdfhqwwer',
//     image: 'http://static1.1.sqspcdn.com/static/f/1542080/27517679/1491563820320/comicencourage.png?token=9put1R5etoFmo259xCeaWqgQI%2B8%3D',
//     locname: 'here',
//     title: 'test title',
//     visible: true,
//     votescore: 11,
//     _id: 1236
//   },
//   {
//     author: 'jim',
//     createdat: 'now',
//     desc: 'asdfasdfasdfasdfasdfjjwerlkuuasd;flkjaw eiwrjasdfjlaksdfu eqwrnmasdfhqwwer',
//     image: 'http://static1.1.sqspcdn.com/static/f/1542080/27517679/1491563820320/comicencourage.png?token=9put1R5etoFmo259xCeaWqgQI%2B8%3D',
//     locname: 'here',
//     title: 'test title',
//     visible: true,
//     votescore: 11,
//     _id: 1237
//   },
//   {
//     author: 'jim',
//     createdat: 'now',
//     desc: 'asdfasdfasdfasdfasdfjjwerlkuuasd;flkjaw eiwrjasdfjlaksdfu eqwrnmasdfhqwwer',
//     image: 'http://static1.1.sqspcdn.com/static/f/1542080/27517679/1491563820320/comicencourage.png?token=9put1R5etoFmo259xCeaWqgQI%2B8%3D',
//     locname: 'here',
//     title: 'test title',
//     visible: true,
//     votescore: 11,
//     _id: 1238
//   },
//   {
//     author: 'jim',
//     createdat: 'now',
//     desc: 'asdfasdfasdfasdfasdfjjwerlkuuasd;flkjaw eiwrjasdfjlaksdfu eqwrnmasdfhqwwer',
//     image: 'http://static1.1.sqspcdn.com/static/f/1542080/27517679/1491563820320/comicencourage.png?token=9put1R5etoFmo259xCeaWqgQI%2B8%3D',
//     locname: 'here',
//     title: 'test title',
//     visible: true,
//     votescore: 11,
//     _id: 1239
//   }
// ]

export default {
  components:
  {
    PostBox
  },

  data () {
    return {
      loaded: [],
      posts: [],
      errors: [],
      newestShown: true
    }
  },
  // Start with fetching newest reports when loading feed
  created () {
    this.getNewest()
  },

  methods: {
    checkLength () {
      if (this.posts.length == this.loaded.length) {
        this.refs.feedLoader.stop()
        return true
      }
      return false
    },
    // handler needed for the infinite scrolling
    // NEED FIX
    loadMore (index, done) {
      // index > indicates the pagination
      // done  > function to call when all necessary updates are done
      //         Need to be called, to end the loading message

      setTimeout(() => {
        console.log(index)
        var oIndex = index - 1
        if (oIndex < this.posts.length) {
          this.loaded.push(this.posts[oIndex])
        }
        else {
          // console.log("here")
          this.$refs.feedLoader.stop()
        }
        done()
      }, 1500)
      // done()
    },

    getNewest () {
      // this.$refs.feedLoader.reset()
      // this.loaded = []

      axios.get('http://localhost:8081/report/newest/')
      // axios({
      //   method: 'get',
      //   url: 'http://localhost:8081/report/newest',
      //   timeout: 1500
      // })
      .then(response => {
        this.posts = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
      this.newestShown = true

    },
    /* async getNewest () {
      try {
        const response = await axios.get('http://localhost:8081/report/newest/')
        this.posts = response.data
      }
      catch (e) {
        this.errors.push(e)
      }
      this.newestShown = true
    },
    async getMostVoted () {
      try {
        const response = await axios.get('http://localhost:8081/report/most-voted/')
        this.posts = response.data
      }
      catch (e) {
        this.errors.push(e)
      }
      this.newestShown = false
    }, */
    getMostVoted () {
      // this.$refs.feedLoader.reset()
      // this.loaded = []

      axios.get('http://localhost:8081/report/most-voted/')
      .then(response => {
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

<style scoped>
.feedContent
{



}

.feedHeader
{
  text-align: center;
  font-weight:400;
  margin-bottom: 70px;
}

.streamHead
{
  min-width: 100%;
  max-width: 100%;

  margin-top: 0px;
  margin-bottom: 0px;

  border-bottom: 1px solid #D6D6D6;
  display:flex;
}

.streamTab
{
  padding-top:15px;
  padding-bottom: 15px;
  text-align: center;
  width:50%;

  box-sizing: border-box;
  border-bottom: 5px solid;
  border-bottom-color: transparent;
  background-color: #D4D4D4;

  cursor: pointer;
  color: #A1A1A1;
  text-transform: uppercase;
  font-weight: 500;


  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome and Opera */
}

.tabActive
{
  color: #111;
  border-bottom-color: #5DADF4;
  background-color: #f4f4f4;
}

.cardLoader
{

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 5px 40px 5px
}

.feedStream
{
  max-width: 80%;
  min-width: 320px;
  margin-left : auto;
  margin-right: auto;
}
</style>
