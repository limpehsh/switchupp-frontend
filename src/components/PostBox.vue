<!--
  PostBox component,
  used for containing information about a post
-->
<template>
  <div class="card bg-light">
    <transition name="fade" mode="out-in" >
      <div class="rowForm" v-if="!showMap" key="noMap">
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
              <div class="postLinkDetail">Submitted by <a>{{usrnm}}</a> on <a>{{datePosted}}</a></div>
              <div class="postLinkDetail"><a @click="toggleMap">{{locn}}</a></div>
            </div>

            <!-- <div class="mapContainer">
              <MapBox />
            </div> -->
          </div>

          <q-transition name="slide">
            <div class="content-wrapper" v-show="visible">
              <img @click="enlargeImage" class="postImage" :src="postImg">
              <q-modal :content-css="{
                  maxHeight: '85vh',
                  maxWidth: '85vw'
                }"
                       ref="postImageLarge">
                <img class="largeImg" :src="postImg">
              </q-modal>
              <div class="text-content">
                {{content}}
              </div>
            </div>
          </q-transition>
          <button class="full-width clear text-grey-7" @click="toggleVisible()">{{labelName}}</button>

        </div>
      </div>

      <div v-else class="rowForm" key="Map">
        <div class="side-btn-section middleButton">
          <button class="small circular light clear" @click="toggleMap"><i>arrow_back</i></button>
        </div>
        <div class="postContent">
          <div class="postTitle">{{title}}</div>
          <div class="mapContainer full-width">
            <MapBox />
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>


<script>
import MapBox from './MapBox'

// for placeholder
// var title = 'a post title'
// var locn = 'somewhere over the rainbow'
// var usrnm = 'username'
// var content = `this is a long content, for testing purpose. hopefully the
// stretcher for the post work quite well so that later it can look real cool.
// won't it be cool if we have a show more/less function for our post
// this is a long content, for testing purpose. hopefully the
// stretcher for the post work quite well so that later it can look real cool.
// won't it be cool if we have a show more/less function for our post
// this is a long content, for testing purpose. hopefully the
// stretcher for the post work quite well so that later it can look real cool.
// won't it be cool if we have a show more/less function for our post`

export default
{
  name: 'PostBox',

  components:
  {
    MapBox
  },

  data: function () {
    return {
      count: this.postData.votescore,
      usrnm: this.postData.author,
      content: this.postData.desc,
      title: this.postData.title,
      datePosted: this.postData.createdAt,
      postImg: this.postData.image,
      locn: this.postData.locname,
      /* for collapsible */
      labelName: 'More',
      visible: false,
      showMap: false
    }
  },

  methods:
  {
    enlargeImage: function () {
      this.$refs.postImageLarge.open()
    },
    toggleMap: function () {
      this.showMap = !this.showMap
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

      validator: function (postData) {
        var cVoteCount = typeof postData.votescore === 'number'
        var cPostTitle = typeof postData.title === 'string'
        var cPostedBy = typeof postData.author === 'string'
        var cContent = typeof postData.desc === 'string'
        var cAuthor = typeof postData.author === 'string'

        var check = cVoteCount && cPostedBy && cContent && cPostTitle && cAuthor
        return check
      }
    }
  }
}
</script>


<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}

.card {
  /* cards need a max-width specified */
  /*max-width: 950px;*/
  min-width: 300px;
  padding: 10px 10px 10px 10px;
  margin-top: 0px;
  margin-bottom: 0px;
  /*margin-bottom: 15px;*/
}

.rowForm
{
  max-width:100%;
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

.middleButton
{
  justify-content: center;
}

.voteCount
{
  margin-top:10px;
  margin-bottom: 10px;
}

/* post content */
.postContent
{
  max-width: 100%;
  min-width: 100%;

  padding: 5px 40px 5px 20px;

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

  /*width:450px;*/
  height:150px
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
  line-height: 1.5;
}

/* content detail */
.contentDetail
{
  padding-top: 15px;
}

.content-wrapper
{
  padding-top: 20px;
  max-width: 100%;
}

.postImage
{
  position: relative;
  display: block;
  max-width: 100%;
  max-height: 200px;
  align-self: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 25px;
}

.postImage:hover
{
  cursor: pointer
}

.largeImg
{
  max-width: 80vw;
  max-height: 80vh;
}

.text-content
{
  max-width: 100%;

  font-size: 14px;
  line-height: 1.5;

  /* text wrapping */
  word-wrap: break-word;
}

</style>
