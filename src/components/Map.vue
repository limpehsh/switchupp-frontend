<template>
  <div>
    <div class="layout-padding">
      <h1 class="Title">Map Display</h1>
      <div id="app">
        <v-map :zoom="zoom" :center="center">
          <v-tilelayer :url="url" :attribution="attribution"></v-tilelayer>
          <!-- <v-marker :lat-lng="marker"></v-marker> -->
        </v-map>
      </div>
    </div>
  </div>
</template>

<script>

import Vue from 'vue'
import Vue2Leaflet from 'vue2-leaflet'
Vue.component('v-map', Vue2Leaflet.Map)
Vue.component('v-tilelayer', Vue2Leaflet.TileLayer)
Vue.component('v-marker', Vue2Leaflet.Marker)

export default {
  name: 'map',
  data () {
    return {
      zoom: 30,
      center: [-37.801993, 144.959087],
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      // marker: L.latLng(-37.801993, 144.959087)
    }
  }
}

</script>

<style>
@import '../../node_modules/leaflet/dist/leaflet.css';
#app {
height: 500px;
}
</style>
