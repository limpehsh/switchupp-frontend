<<<<<<< HEAD
=======
<template>
  <div>
    <div class="layout-padding">
      <h1 class="Title">Map Display</h1>
    </div>
    <div id="app">
      <v-map :zoom="zoom" :center="center">
        <v-tilelayer :url="url" :attribution="attribution"></v-tilelayer>
        <v-marker :lat-lng="marker"></v-marker>
      </v-map>
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
      zoom: 13,
      center: [-37.7970795, 144.961302339626],
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      marker: L.latLng(-37.7970795, 144.961302339626)
    }
  }
  /*
  methods: {
    fixURL () {
      delete L.Icon.Default.prototype._getIconUrl
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
        iconUrl: require('leaflet/dist/images/marker-icon.png'),
        shadowUrl: require('leaflet/dist/images/marker-shadow.png')
      })
    }
  }
  */
}
</script>

<style scoped>
@import "../../node_modules/leaflet/dist/leaflet.css";
#app {
  height: 300px;
  width: 800px;
}
</style>
>>>>>>> newComponent
