<script setup>
import GoogleMapsApiLoader from 'google-maps-api-loader'

import { ref, onMounted, defineProps } from 'vue'

defineProps({
    apiKey: "",
    mapConfig: {}
})

const apiKey = ref(null)
const mapConfig = ref(null)


function initializeMap() {
      const mapContainer = this.$refs.googleMap
      this.map = new this.google.maps.Map(
        mapContainer, this.mapConfig
      )
}

onMounted(async() => {
    const googleMapApi = await GoogleMapsApiLoader({
      apiKey: apiKey
    })
    this.google = googleMapApi
    initializeMap()
})
</script>
<template>
    <div class="google-map" ref="googleMap"></div>
</template>
<style lang="css">
</style>