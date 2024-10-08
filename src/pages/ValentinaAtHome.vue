<script setup>
import ValentinaAtHomeVideo from '../assets/valentina-at-home.MP4';
</script>

<template>
    <div class="grid-2-h section bg-white valentina-at-home">
        <div class="left-grid">
            <v-img class="img" src="../assets/valentina-at-home.png"></v-img>
        </div>
        <div class="right-grid paragraph py-5 px-3">
            <CustomTitle spanText="VALENTINA EM CASA"></CustomTitle>
            <h1 class="velino">Valentina em Casa!</h1>
            <p class="text-gray bold-500 pt-3">Reúna um grupo de no mínimo 25 pessoas e entre em contato com a gente. 
            Durante 4 horas você terá nossas pizzas preparadas e servidas em seu evento,
            com a mesma qualidade e sabor que você já conhece, por um valor que vai te surpreender!.</p>
            <p class="gray-box pa-5">A partir de R$83,00 por pessoa, são três tipos de cardápios, a bebida 
            não está inclusa. O pizzaiolo, o forno e todos os detalhes são por nossa conta, e a diversão fica com você!</p>
            <div class="call-valentina">
                <p class="pa-10">
                    <a><img src="../assets/phone-call.svg" width="25px"></a>
                    Ligue para (61) 3273-7009 para mais informações e reservas de datas.
                </p>
            </div>
        </div>
    </div>

    <div class="full-grid video mt-5">
        <video controls width="100%">
            <source :src="ValentinaAtHomeVideo" type="video/mp4">
        </video>
    </div>
</template>

<style lang="css" scoped>
.valentina-at-home .left-grid {
    align-content: center;
}

.call-valentina {
    display: grid;
    grid-template-columns: 100%;
}

.call-valentina a {
    align-self: center !important;
    margin: auto;
}
</style>