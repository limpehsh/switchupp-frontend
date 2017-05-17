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
              <!-- <button class="full-width"
                      @click='getNewest()'>
                Recent
              </button> -->
            </div>
            <div v-bind:class="{tabActive : !newestShown}"
                 class="streamTab"
                 @click="getMostVoted()"
                 >
                 Popular
              <!-- <button class="full-width"
                      @click="getMostVoted()">
                      Popular
              </button> -->
            </div>
          </div>
          <PostBox v-for="post of posts" :postData="post" :key="post._id"/>

          <!-- <div v-for="post of posts">
            <div class="card bg-blue-grey-1">
              <div class="item one-line">
                <img class="item-primary" :src="post.image">
                <div class="item-content">
                  <div>{{post.author}}</div>
                </div>
              </div>
              <img class="bg-white" :src='post.image'>
              <div class="card-content">
                {{post.desc}}
              </div>
              <div class="card-actions">
                <div class="text-primary">
                  <i>arrow_upward</i> {{post.votescore}} votes
                </div>
                <div class="text-primary">
                  <i>mode_comment</i> 8 comments
                </div>

                <div class="auto"></div>
                <div class="text-grey-6">
                  {{post.createdAt}}
                </div>
              </div>
            </div>
          </div> -->

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

var postPool = [
  {
    author: 'jim',
    createdat: 'now',
    desc: 'asdfasdfasdfasdfasdfjjwerlkuuasd;flkjaw eiwrjasdfjlaksdfu eqwrnmasdfhqwwer',
    image: 'http://static1.1.sqspcdn.com/static/f/1542080/27517679/1491563820320/comicencourage.png?token=9put1R5etoFmo259xCeaWqgQI%2B8%3D',
    locname: 'here',
    title: 'test title',
    visible: true,
    votescore: 11,
    _id: '1234'
  },
  {
    author: 'jim',
    createdat: 'now',
    desc: 'asdfasdfasdfasdfasdfjjwerlkuuasd;flkjaw eiwrjasdfjlaksdfu eqwrnmasdfhqwwer',
    image: 'http://static1.1.sqspcdn.com/static/f/1542080/27517679/1491563820320/comicencourage.png?token=9put1R5etoFmo259xCeaWqgQI%2B8%3D',
    locname: 'here',
    title: 'test title',
    visible: true,
    votescore: 11,
    _id: '1235'
  },
  {
    author: 'jim',
    createdat: 'now',
    desc: 'asdfasdfasdfasdfasdfjjwerlkuuasd;flkjaw eiwrjasdfjlaksdfu eqwrnmasdfhqwwer',
    image: 'http://static1.1.sqspcdn.com/static/f/1542080/27517679/1491563820320/comicencourage.png?token=9put1R5etoFmo259xCeaWqgQI%2B8%3D',
    locname: 'here',
    title: 'test title',
    visible: true,
    votescore: 11,
    _id: '1236'
  },
  {
    author: 'jim',
    createdat: 'now',
    desc: 'asdfasdfasdfasdfasdfjjwerlkuuasd;flkjaw eiwrjasdfjlaksdfu eqwrnmasdfhqwwer',
    image: 'http://static1.1.sqspcdn.com/static/f/1542080/27517679/1491563820320/comicencourage.png?token=9put1R5etoFmo259xCeaWqgQI%2B8%3D',
    locname: 'here',
    title: 'test title',
    visible: true,
    votescore: 11,
    _id: '1237'
  },
  {
    author: 'jim',
    createdat: 'now',
    desc: 'asdfasdfasdfasdfasdfjjwerlkuuasd;flkjaw eiwrjasdfjlaksdfu eqwrnmasdfhqwwer',
    image: 'http://static1.1.sqspcdn.com/static/f/1542080/27517679/1491563820320/comicencourage.png?token=9put1R5etoFmo259xCeaWqgQI%2B8%3D',
    locname: 'here',
    title: 'test title',
    visible: true,
    votescore: 11,
    _id: '1238'
  }
]

export default {
  components:
  {
    PostBox
  },

  data () {
    return {
      posts: postPool,
      errors: [],
      newestShown: false
    }
  },
  // Start with fetching newest reports when loading feed
  created () {
    // this.getNewest()
  },
  methods: {
    getNewest () {
      axios.get('http://localhost:8081/report/newest/')
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
img
{
  width: 300px;
}
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



.feedStream
{
  max-width: 80%;
  min-width: 320px;
  margin-left : auto;
  margin-right: auto;
}
</style>
