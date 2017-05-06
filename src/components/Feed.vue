<template>
  <div>
    <div class="layout-padding">
      <div class="content">
        <h1 class="">Incident Feed</h1>
      </div>
      <PostBox
        :usrAvatar="avtr"
        :userName="usrnm"
        :postContent="ctn"
        :imgHere="flag"
        :postImg="imgs"/>
    </div>
  </div>
</template>

<script>
import PostBox from './PostBox'
var avtr = '../statics/snorlax.png'
var usrnm = 'asdf'
var ctn = `check check this out check this out`
var flag = true

export default {
  components:
  {
    PostBox
  },
  data () {
    return {
      avtr: avtr,
      usrnm: usrnm,
      ctn: ctn,
      flag: flag,
      imgs: avtr
    }
  }
}
</script>

<style>
.content
{
  display:flex;
  flex-direction: column;
  align-items: center;
}



</style>
