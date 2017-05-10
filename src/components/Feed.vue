<template>
  <div>
    <div class="layout-padding">
      <div class="feedContent">
        <h2 class="feedHeader">Incident Feed</h2>

        <div class="feedStream">
          <PostBox v-for="post in postPool" :key="post.id"/>
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
      postPool
    }
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
