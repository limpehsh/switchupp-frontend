<template>
  <div class="postBox-container">
    <!-- button section here -->
    <div class="buttonSection">
      <button @click = "voteCount++"><i>keyboard_arrow_up</i></button>
      <div class="count" v-text="voteCount"></div>
      <button @click = "voteCount--"><i>keyboard_arrow_down</i></button>
    </div>

    <div class="contentSection">
      <div class="postHeader">
        <div class="avatarContainer">
          <img class="avatar" :src="usrAvatar"></img>
        </div>
        <div class="username">
          <span>{{userName}}</span>
        </div>
      </div>

      <div class="postContent">
        <!-- text container-->
        <div>
          <span>{{postContent}}</span>
        </div>
        <!-- image container -->
        <div v-if = "imgHere === true" class="imgContainer">
          <img :src="postImg"> </img>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default
{
  name: 'PostBox',

  data: function () {
    return {
      voteCount: 0
    }
  },

  props:
  {
    usrAvatar: {
      type: String,
      required: true
    },
    userName: {
      type: String,
      required: true
    },
    postContent: {
      type: String,
      required: true
    },
    imgHere: {
      type: Boolean,
      required: true
    },
    postImg: String
  }
}
</script>


<style scoped>
.postBox-container
{
  /* box shadow effect */
  -webkit-box-shadow: 1px 2px 7px 2px rgba(230,230,230,1);
  -moz-box-shadow: 1px 2px 7px 2px rgba(230,230,230,1);
  box-shadow: 1px 2px 7px 2px rgba(230,230,230,1);


  display: flex;
  flex-direction: row;

  min-width: 350px;
  width: 60vw;
  max-width: 500px;


  /* padding and margin
     reminder : top right bottom left */

  margin: 10px auto 10px auto;

}

.buttonSection
{
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 10px 5px 10px 15px

}
.count{
  padding: 5px 5px 5px 5px;
}

.contentSection
{
  padding-left: 15px;
  padding-right: 20px;
}

.postHeader
{
  font-weight: bold;
  padding: 20px 5px 10px 5px;
  border-bottom: 1px solid #D8D8D8;

}

.avatarContainer
{
  margin-left:  0px;
  margin-right: 10px;
  padding-bottom: 5px
}

.avatar
{
  border-radius: 100%;
  max-height: 40px;
  max-width:  40px;
}

.username
{
  padding: 5px 10px 5px 10px;
}

.postContent
{
  padding: 20px 10px 20px 0px;
}

.imgContainer
{
  max-width: 100%;
}

</style>
