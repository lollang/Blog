<template>
  <div>
    <gmap-map
      :center="center"
      :zoom="zoom"
      style="width:100%;  height: 400px;"
    >
    <GmapCircle
      v-for="(pin, index) in markers"
      :key="index"
      :center="pin.position"
      :radius='10000'
      :visible="true"
      :options="{icons:gmapIcons,fillColor:'red',fillOpacity:0.5,strokeColor:'#fff',strokeWeight: 1}"
    ></GmapCircle>
    </gmap-map>
  </div>
</template>

<script>
import { MAP_DEFAULT_CENTER, MAP_DEFAULT_ZOOM } from '@/statics/constants'
import LOCATIONS from '@/statics/places/'

export default {
  name: 'GoogleMap',
  data () {
    return {
      // default to Montreal to keep it simple
      // change this to whatever makes sense
      center: { lat: MAP_DEFAULT_CENTER.lat, lng: MAP_DEFAULT_CENTER.lng },
      zoom: MAP_DEFAULT_ZOOM,
      markers: LOCATIONS
    }
  },

  mounted () {
    this.geolocate()
  },

  methods: {
    geolocate: function () {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
      })
    }
  }
}
</script>
