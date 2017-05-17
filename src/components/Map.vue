<template>
  <div>
    <div class="layout-padding">
      <h1 class="title">Map Display</h1>
      <div id="app" class="bigMap">
        <v-map class="mapasdf" :zoom="zoom" :center="center">
          <v-tilelayer :url="url" :attribution="attribution"></v-tilelayer>
          <div v-for="post of posts">
            <v-marker :lat-lng="displayLeaflet(post.lat,post.lon)"></v-marker>
          </div>
        </v-map>
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
    'v-marker': Vue2Leaflet.Marker
  },
  data () {
    return {
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
    getAllReports () {
      axios.get('http://localhost:8081/report/newest/')
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
</style>
