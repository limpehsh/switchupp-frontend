<!--
  PostBox component,
  used for containing information about a post
-->
<template>
  <div class="card">
    <!-- side button section -->
    <div class="side-btn-section">
      <button class="small circular light clear"><i>arrow_upward</i></button>
      <span class="voteCount">{{count}}</span>
      <button class="small circular light clear"><i>arrow_downward</i></button>
    </div>
    <!-- post content section -->
    <div class="postContent">
      <!-- header section-->
      <div class="contentHeader">
        <div>
          <div class="postTitle">{{title}}</div>
          <div class="postLinkDetail"><a>{{locn}}</a></div>
          <div class="postLinkDetail"><a>{{usrnm}}</a></div>
        </div>

        <div class="mapContainer">
          <MapBox />
        </div>
      </div>


      <q-transition name="slide">
        <div class="content-wrapper" v-show="visible">
          <div class="text-content">
            {{content}}
          </div>

        </div>
      </q-transition>
      <button class="full-width clear text-grey-7" @click="toggleVisible()">{{labelName}}</button>
      <!-- <div class="contentDetail">


        <div class="content-wrapper" v-bind:class="{collapsed: isCollapse}">{{content}}</div>
        <button class="stretcher light clear" @click="handleCollapse">MORE</button>

      </div> -->
    </div>
  </div>
</template>


<script>
import MapBox from './MapBox'

// for placeholder
var title = 'a post title'
var locn = 'somewhere over the rainbow'
var usrnm = 'username'
var content = `this is a long content, for testing purpose. hopefully the
stretcher for the post work quite well so that later it can look real cool.
won't it be cool if we have a show more/less function for our post
this is a long content, for testing purpose. hopefully the
stretcher for the post work quite well so that later it can look real cool.
won't it be cool if we have a show more/less function for our post
this is a long content, for testing purpose. hopefully the
stretcher for the post work quite well so that later it can look real cool.
won't it be cool if we have a show more/less function for our post`

export default
{
  name: 'PostBox',

  components:
  {
    MapBox
  },

  data: function () {
    return {
      count: this.postData.voteCount,
      title: this.postData.postTitle,
      locn: this.postData.incidentLocn,
      usrnm: this.postData.postedBy,
      content: this.postData.content,
      /* for collapsible */
      labelName: 'More',
      visible: false,
      renderMap: false
    }
  },

  methods:
  {
    openMap: function () {
      this.$refs.positionModal.open()
    },
    toggleVisible: function () {
      this.visible = !this.visible
      this.labelName = this.visible ? 'Less' : 'More'
    }
  },

  props:
  {
    postData: {
      type: Object,
      default: function () {
        return {
          voteCount: 0,
          postTitle: title,
          incidentLocn: locn,
          postedBy: usrnm,
          content: content
        }
      },
      validator: function (postData) {
        var cVoteCount = typeof postData.voteCount === 'number'
        var cPostTitle = typeof postData.postTitle === 'string'
        var cIncidentLocn = typeof postData.incidentLocn === 'string'
        var cPostedBy = typeof postData.postedBy === 'string'
        var cContent = typeof postData.content === 'string'

        return cVoteCount && cPostTitle && cIncidentLocn && cPostedBy && cContent
      }
    }
  }
}
</script>


<style scoped>
/* check this one https://codepen.io/Idered/pen/AeBgF?editors=1100 */
.card {
  /* cards need a max-width specified */
  max-width: 950px;
  min-width:400px;
  padding: 25px 25px 15px 25px;

  display: flex;
  flex-direction:row;

}

.side-btn-section
{
  display: flex;
  flex-direction: column;

  align-items: center;

}

.voteCount
{
  margin-top:10px;
  margin-bottom: 10px;
}

/* post content */
.postContent
{
  width: 100%;
  padding: 5px 10px 5px 10px;
  margin-left: 10px;
}

/* post header */
.contentHeader
{
  padding-bottom: 10px;
  border-bottom: 1px solid #CCCCCC;

  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.mapContainer
{

  min-width:300px;
  min-height:150px;
}



.postTitle
{
  display: block;
  font-size: 20px;
  font-weight: bold;
  margin-bottom:8px;
}

.postLinkDetail
{
  display: block;
  font-size: 12px;
}

/* content detail */
.contentDetail
{
  padding-top: 15px;
}

.content-wrapper
{
  padding-top: 20px;
}

.text-content
{
  font-size: 14px;
  line-height: 1.5;
}





</style>
