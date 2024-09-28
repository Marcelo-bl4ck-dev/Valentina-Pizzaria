<script setup>
import ValentinaAtHome from '@/pages/ValentinaAtHome.vue';
import ValentinaAtHomeVideo from '../assets/valentina-at-home.MP4';


</script>
<template>
    <div class="at-home-page">
        <div class="full-grid video mt-5">
            <video autoplay controls width="100%">
                <source :src="ValentinaAtHomeVideo" type="video/mp4">
            </video>
        </div>
        <ValentinaAtHome /> 
    </div>
</template>
<style lang="css">

.at-home-page {
    padding: 2vh 15vh;
}

@media (max-width: 800px){
    .at-home-page {
        padding: 2vh;
    }
}
</style>