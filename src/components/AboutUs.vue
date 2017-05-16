<template>
  <div>
    <div class="layout-padding">
      <!-- Title -->
      <div class="about-header-section">
        <h1 class="about-header-title">ABOUT US</h1>
        <p class="about-header-desc">{{headerDesc}}</p>
      </div>

      <!-- Team Members -->
      <div class="team-section">
        <h2 class="team-title">Team Members</h2>

        <div class="section">

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

        <div class="section">

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
</template>

<script>
export default {
  name: 'aboutus',
  data () {
    return {
      headerDesc: `Welcome to SwitchUp.
      SwitchUp aims to be a platform that collects reports and complaints related to public infrastructure in Melbourne.
      This is done to raise an awareness and concern about the infrastructure condition.
      We are not directly connected to the government or city council in any kind of form.`,
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


<style scoped>

/* sttyle is scoped, the card there only works for this component */
.card
{
  max-width  : 450px;
  min-width  : 300px;
  max-height : 300px;
  height: 300px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  margin  : 25px 25px 25px 25px;
  padding : 40px 25px 40px 25px;
}

.about-header-section
{
  display: block;
}

.about-header-title
{
  text-align: center;
}

.about-header-desc
{
  padding : 0px 40px 0px 40px;

  white-space : pre-line;
  text-align  : justify;

}

.team-section
{
  margin-top: 150px;
}

.team-title
{
  text-align: center;
}

.dudeName
{
  text-align: center;
  font-weight: bold;
  padding: 25px 0px 0px 0px;
}

.dudeDo
{
  padding: 0px 5px 0px 5px;
}

.section
{
  display:flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}

@media screen and (max-width: 700px)
{
  .section
  {
    display: flex;
    flex-direction: column;
  }
}

</style>
