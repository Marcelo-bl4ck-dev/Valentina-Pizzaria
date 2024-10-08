<script setup>
import ValentinaAtHomeVideo from '../assets/valentina-at-home.MP4'
import ReserveWidget from '../components/ReserveBox/ReserveWidget.vue';
</script>
<template>
    <div class="full-grid section bg-white align-start py-7">
        <CustomTitle spanText="RESERVAS"/>
        <h1 class="velino">Faça sua reserva</h1>
    </div>
    <div class="grid-2-h section bg-white reserve">
        <div class="left-grid"> 
            <ReserveWidget />
        </div>
        <div class="right-grid">
            <video autoplay muted controls width="100%">
                <source :src="ValentinaAtHomeVideo">
            </video>
        </div>
    </div>
</template>
<style lang="css">
.reserve > div {
    margin-bottom: 2vh;
}

@media (max-width: 870px) {
    .reserve .paragraph {
        padding: 3vh 0;
    }

    .reserve {
        grid-template-columns: 100% !important;
    }
}
</style>