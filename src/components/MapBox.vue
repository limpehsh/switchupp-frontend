<!--
  Map component,
  used to place map information anywhere
-->
<template>
  <div id="app">
    <v-map class ="mapasdf" :zoom="zoom" :center="center">
      <v-tilelayer :url="url" :attribution="attribution"></v-tilelayer>
      <v-marker :lat-lng="marker"></v-marker>
    </v-map>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
import L from 'leaflet'
import Vue2Leaflet from 'vue2-leaflet'

delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})

export default
{
  name: 'MapBox',

  components:
  {
    'v-map': Vue2Leaflet.Map,
    'v-tilelayer': Vue2Leaflet.TileLayer,
    'v-marker': Vue2Leaflet.Marker
  },

  data: function () {
    var lat = this.mapData.lat
    var lon = this.mapData.lon

    return {

      zoom: 16,
      center: [lat, lon],
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      marker: L.latLng(lat, lon)
      // L.latLng(-37.7970795, 144.961302339626)
    }
  },

  methods:
  {
  },

  props:
  {
    // NOTE: validator on work
    mapData: {
      type: Object,
      validator: function (mapData) {
        // var cZoom = typeof mapData.zoom === 'number'
        // /var cCenter = Array.isArray(mapData.center)
        // typeof mrklatlng is defined by Leaflet

        return true
      }
    }
  }
}

</script>

<style scoped>
@import "../../node_modules/leaflet/dist/leaflet.css";
#app {
  height: 100%;
  width: 100%;
}

.mapasdf
{
  z-index: 0;
}

.leaflet-fake-icon-image-2x {
  background-image: url(../../node_modules/leaflet/dist/images/marker-icon-2x.png);
}
.leaflet-fake-icon-shadow {
  background-image: url(../../node_modules/leaflet/dist/images/marker-shadow.png);
}
</style>
