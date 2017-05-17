<template>
  <div>
    <div class="layout-padding">
      <h1 class="title">Map Display</h1>
      <div id="app" class="bigMap">
        <div v-if="this.showSwitchBoarder" class="box">
          <div class="switch-container">
            <div class="joy-con-left">
              <div class="ellipse-button"></div>
              <div class="analog-left"></div>
              <div class="d-pad-container-left">
                <div class="d-pad-top"></div>
                <div class="d-pad-left"></div>
                <div class="d-pad-right"></div>
                <div class="d-pad-bottom"></div>
              </div>
              <div class="square-button"></div>
            </div>
            <div class="joy-con-right">
              <div class="analog-right"></div>
              <div class="circle-button-right"></div>
              <div class="d-pad-container-right">
                <div class="d-pad-top"></div>
                <div class="d-pad-left"></div>
                <div class="d-pad-right"></div>
                <div class="d-pad-bottom"></div>
              </div>
              <div class="d-pad-2-container">
                <div class="d-pad-2-vertical"></div>
                <div class="d-pad-2-horizontal"></div>
              </div>
            </div>
            <div class="screen-outer">
                <div class="screen-inner">
                  <v-map class="mapasdf" :zoom="zoom" :center="center">
                    <v-tilelayer :url="url" :attribution="attribution"></v-tilelayer>
                    <div v-for="post of posts">
                      <v-marker :lat-lng="displayLeaflet(post.lat,post.lon)">
                        <v-popup :content="post.locname"></v-popup>
                        <v-tooltip :content="post.title"></v-tooltip>
                      </v-marker>
                    </div>
                  </v-map>
                </div>
              </div>
            </div>
          </div>
          <v-map v-else class="mapasdf" :zoom="zoom" :center="center">
            <v-tilelayer :url="url" :attribution="attribution"></v-tilelayer>
            <div v-for="post of posts">
              <v-marker :lat-lng="displayLeaflet(post.lat,post.lon)">
                <v-popup :content="post.locname"></v-popup>
                <v-tooltip :content="post.title"></v-tooltip>
              </v-marker>
            </div>
          </v-map>
        </div>
        <br />
        <button v-if="this.showSwitchBoarder" class="bigMap dark raised round" @click="toggleSwitchBoarder">SWITCH</button>
        <button v-else class="bigMap primary raised round" @click="toggleSwitchBoarder">SWITCH</button>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
// import * as Nominatim from "nominatim-browser";
import L from 'leaflet'
import Vue2Leaflet from 'vue2-leaflet'

delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})

export default {
  components: {
    'v-map': Vue2Leaflet.Map,
    'v-tilelayer': Vue2Leaflet.TileLayer,
    'v-marker': Vue2Leaflet.Marker,
    'v-tooltip': Vue2Leaflet.Tooltip,
    'v-popup': Vue2Leaflet.Popup
  },
  data () {
    return {
      showSwitchBoarder: false,
      posts: [],
      errors: [],
      zoom: 13,
      center: [-37.7970795, 144.961302339626],
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      marker: L.latLng(-37.7970795, 144.961302339626)
    }
  },
  created () {
    this.getAllReports()
  },
  methods: {
    toggleSwitchBoarder () {
      this.showSwitchBoarder = !this.showSwitchBoarder
    },
    getAllReports () {
      axios.get('http://sample-env.2fnpngmx26.us-west-2.elasticbeanstalk.com/report/newest/')
      .then(response => {
        this.posts = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
    },
    displayLeaflet (latitude, longtitude) {
      return L.latLng(latitude, longtitude)
    }
  }
}
</script>

<style scoped>
@import "../../node_modules/leaflet/dist/leaflet.css";

#app {
  height: 60vh;
  min-width: 300px;
  width: 85%;
}

.title {
  text-align: center;
}

.mapasdf
{
  z-index: 0;
}

.bigMap
{
  display: block;

  margin-left: auto;
  margin-right: auto;
}

@media screen and (max-width: 700px)
{

}

/* Nintendo Switch in Pure CSS */
.box{
  position: relative;
  display: block;
  margin: auto;
  background: none;
  border: none;
  bottom: 100px;
  /*height: 400px;*/
  /*width: 600px;*/
  height: 800px;
  width: 1200px;
}

.switch-container{
  position: absolute;
  width: 80%;
  height: 60%;
  background: none;
  top: 20%;
  left: 10%;
}

.joy-con-left{
  position: absolute;
  height: 100%;
  width: 15%;
  background: #00AAFF;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
}

.joy-con-right{
  position: absolute;
  height: 100%;
  width: 15%;
  right: 0%;
  background: #E21628;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
}

.screen-outer{
  position: absolute;
  background: none;
  width: 70%;
  left: 15%;
  background: black;
  height: 100%;
}

.screen-inner{
  position: absolute;
  background: none;
  width: 90%;
  left: 5%;
  top: 5%;
  background: #0D47A1;
  height: 90%;
}

.analog-left{
  position: absolute;
  border-radius: 50%;
  background: black;
  height: 13%;
  width: 40%;
  top: 20%;
  left: 25%;
  border: solid 5px #202226;
}

.analog-right{
  position: absolute;
  border-radius: 50%;
  background: black;
  height: 13%;
  width: 40%;
  top: 50%;
  left: 25%;
  border: solid 5px #202226;
}

.d-pad-container-left{
  position: absolute;
  height: 23%;
  width: 70%;
  left: 15%;
  background: none;
  top: 45%;
}

.d-pad-container-right{
  position: absolute;
  height: 23%;
  width: 70%;
  left: 15%;
  background: none;
  top: 20%;
}

.d-pad-top{
  position: absolute;
  height: 30%;
  width: 30%;
  left: 35%;
  top: 0%;
  background: black;
  border-radius: 50%;
}

.d-pad-bottom{
  position: absolute;
  height: 30%;
  width: 30%;
  left: 35%;
  bottom: 0%;
  background: black;
  border-radius: 50%;
}

.d-pad-left{
  position: absolute;
  height: 30%;
  width: 30%;
  left: 0%;
  top: 35%;
  background: black;
  border-radius: 50%;
}

.d-pad-right{
  position: absolute;
  height: 30%;
  width: 30%;
  right: 0%;
  top: 35%;
  background: black;
  border-radius: 50%;
}

.square-button{
  position: absolute;
  bottom: 15%;
  right: 13%;
  height: 7%;
  width: 23%;
  background: black;
}

.ellipse-button{
  position: absolute;
  height: 3%;
  width: 30%;
  top: 8%;
  right: 5%;
  background: black;
  border-radius: 50px;
}

.d-pad-2-container{
  position: absolute;
  background: none;
  height: 8%;
  width: 25%;
  top: 3%;
  left: 8%;
}

.d-pad-2-vertical{
  position: absolute;
  height: 100%;
  background: black;
  width: 35%;
  left: 32.5%;
}

.d-pad-2-horizontal{
  position: absolute;
  width: 100%;
  background: black;
  height: 35%;
  top: 32.5%;
}

.circle-button-right{
  position: absolute;
  border-radius: 50%;
  background: black;
  height: 3%;
  width: 10%;
  bottom: 18%;
  left: 10%;
  border: solid 5px #202226;
}
</style>
