<template>
  <div>
    <div class="layout-padding">
      <!-- content for component -->
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
import * as Nominatim from "nominatim-browser";
Vue.component('v-map', Vue2Leaflet.Map);
Vue.component('v-tilelayer', Vue2Leaflet.TileLayer);
Vue.component('v-marker', Vue2Leaflet.Marker);
/*
export default {
  data () {
    return {}
  }
}
*/

new Vue({
  el: '#app',
  data() {
    return {
      zoom: 13,
      center: [47.413220, -1.219482],
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      marker: L.latLng(47.413220, -1.219482),
    }
  }
});

</script>

<style>
@import "~leaflet/dist/leaflet.css";
#app {
  height: 300px;
}
</style>
