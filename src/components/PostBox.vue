<!--
  PostBox component,
  used for containing information about a post
-->
<template>
  <div class="card postbox">
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
        <div class="postTitle">{{title}}</div>
        <div class="postLocn"><a>{{locn}}</a></div>
        <div class="postUsr"><a>{{usrnm}}</a></div>
      </div>

      <div class="contentDetail">


        <div class="content-wrapper" v-bind:class="{collapsed: isCollapse}">{{content}}</div>
        <button class="stretcher light clear" @click="handleCollapse">MORE</button>

      </div>
    </div>
  </div>
</template>


<script>
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

  data: function () {
    return {
      count: 0,
      title: title,
      locn: locn,
      usrnm: usrnm,
      content: content,
      /* for collapsible */
      isCollapse: false
    }
  },
  methods:
  {
    handleCollapse: function (e) {
      // isCollapse =! isCollapse
      this.isCollapse = !this.isCollapse
      e.target.textContent = this.isCollapse ? 'LESS' : 'MORE'
    }
  },
  props:
  {
  }
}
</script>


<style scoped>
/* check this one https://codepen.io/Idered/pen/AeBgF?editors=1100 */
.postbox
{
  display: flex;
  flex-direction: row;

  padding: 25px 25px 15px 25px;
}


.side-btn-section
{
  display: flex;
  flex-direction: column;

  align-items: center;
  padding-top: 15px;
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
}

.postTitle
{
  display: block;
  font-size: 20px;
  font-weight: bold;
  margin-bottom:8px;
}

.postLocn
{
  display: block;
  font-size: 12px;
}

.postUsr
{
  display: block;
  margin-top: 3px;
  font-size: 12px;

}

/* content detail */
.contentDetail
{
  padding-top: 15px;
}

.content-wrapper
{
  max-height: 75px;
  overflow-y: hidden;

  transition: max-height 1s ease;
  -webkit-transition: max-height 1s ease;
  -moz-transition: max-height 1s ease;

  text-align: justify;
  background:linear-gradient(transparent 150px, white);
}


.stretcher
{
  position:relative;
  width: 100%;

  font-size: 12px;
  font-weight: bold;
  color: #747474;

  margin-top: 10px;
  text-align: center;


  z-index: 50;
}


/* where the transition magic happens */
.collapsed
{
  max-height: 750px;
  overflow-y: hidden;
}

</style>
