<template>
  <div>
    <div class="layout-padding">
      <!-- Title -->
      <div class="header">
        <h1>ABOUT US</h1>
        <p>Hi would-be incident reporter, welcome to SwitchUp. SwitchUp aims to be the go-to app for filing public infrastructure reports in Melbourne. </p>
      </div>
      <!-- Team Members -->
      <div class="team">
        <h2>Team Members</h2>

        <div class="section">
          <div class=container>
            <div class="card bg-light-blue-3">
              <img class="avatar" :src="avtM">
              <div class="dudeName">Michael</div>
              <div class="dudeDo">
                <ul>
                  <li>Flat-Obsessed Boi</li>
                  <li>{{textM}}</li>
                </ul>
              </div>
            </div>
          </div>

          <div class=container>
            <div class="card bg-light-green-3">
              <img class="avatar" :src="avtG">
              <div class="dudeName">Glory</div>
              <div class="dudeDo">
                <ul>
                  <li>Deadline Warrior</li>
                  <li>{{textG}}</li>
                </ul>
              </div>
            </div>
          </div>

        </div>

        <div class="section">

          <div class=container>
            <div class="card bg-pink-3">
              <img class="avatar" :src="avtR">
              <div class="dudeName">Ryan</div>
              <div class="dudeDo">
                <ul>
                  <li>Sensei / Shifu / Master</li>
                  <li>{{textR}}</li>
                </ul>
              </div>
            </div>
          </div>

          <div class=container>
            <div class="card bg-red-3">
              <img class="avatar" :src="avtP">
              <div class="dudeName">Prima</div>
              <div class="dudeDo">
                <ul>
                  <li>Sleepy Head</li>
                  <li>{{textP}}</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'aboutus',
  data () {
    return {
      textP: 'Gives out good ideas and able to help out all of us',
      textR: 'The one guy that actually knows his shit',
      textM: 'Totally invested in flat-ui and icons, especially flat circle icons...',
      textG: 'Happen to be working at front end, likes colorful stuff',
      // Bug with local image src binding...images need to be placed in statics
      avtP: '../statics/snorlax.png',
      avtR: '../statics/azusa_nakano_yes_we_nyan.png',
      avtM: '../statics/8-bit_link.png',
      avtG: '../statics/rowlet.jpg'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

img {
    margin: auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}

.header
{
  display: flex;
  flex-direction: column;
  align-items: center;
}

.team {
  display: flex;
  width:100%;
  flex-direction: column;
}

.team > h2 {
    text-align: center;
}

.dudeName
{
  font-size: 20px;
  font-weight: bold;
  color:#5F5F5F;
  margin-bottom: 5px;
  text-align: center;
}

.dudeDo
{
  margin-top: 5px;
  font-size: 10px;
  align-self: stretch;
  padding-left:20px;
  padding-right:20px;
  color: #000;
  /* color:#AFAFAF; previous colour */
}

.section
{
  display:flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}

.container
{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width:400px;

  margin: 10px 10px 10px 10px;
  padding: 20px 20px 20px 20px;
}

</style>
