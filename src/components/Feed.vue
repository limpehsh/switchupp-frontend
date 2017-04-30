<template>
  <div>
    <div class="layout-padding">
      <div class="content">
        <h1>Incident Feed</h1>
        <div class="card bg-light">
          <h6>Someone</h6>
        </div>
      </div>

      </Layout>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
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


.header
{

}


.incident_block {
    background-color: #dcdfe6;
    color: #00000;
    margin-left: 5em;
    margin-right: 10em;
}


.incident_pic {
    height: auto;
    width: auto;
    max-width: 12em;
    max-height: 12em;
}


.postContainer
{
  margin-top: 25px;
  margin-bottom: 25px;

  min-width: 320px;

  width: 55vw;

  display: flex;
  flex-direction: column;
}


.postContainer > div {
  width:100%;
}


.imgHolder
{
  max-width: 100%;
  height:auto;
  overflow: hidden;
}


.imgContent
{
  width: 100%;

}

.postHeader
{
  display:flex;
  align-items: center;

}

.postHeader > div
{
  display: flex;
  align-items: center;
}








/*******************************************************/
/* FOR REDDIT STYLE TRIAL*/
.voteBtnContainer
{
  display:flex;
  flex-grow: 0;
}
.voteBtnContainer button
{
  display:flex;
}



.avatarImg
{
  width: 50px;
  height:50px;
  border-radius: 100%;
  margin: 5px 5px 5px 5px;
}

.postContent
{
  display:flex;
  flex-direction: column;
}

.postIn
{
  display:flex;;
  flex-direction: row;
}
.postText
{

}



.postContainer1
{
  margin-top: 25px;
  margin-bottom: 25px;

  /* for beautifying the box */
  background-color: #F6F6F6;
  padding: 10px 10px 10px 10px;
  -webkit-box-shadow: 1px 1px 6px 0.5px rgba(194,194,194,1);
  -moz-box-shadow: 1px 1px 6px 0.5px rgba(194,194,194,1);
  box-shadow: 1px 1px 6px 0.5px rgba(194,194,194,1);

  display:flex;
  flex-direction: row;

  align-items: center;
}
</style>
