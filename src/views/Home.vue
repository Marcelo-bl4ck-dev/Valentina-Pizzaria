

<script setup>
import AboutValentina from '../pages/AboutValentina.vue';
import CelebrateBirthday from '../pages/CelebrateBirthday.vue';
import ValentinaAtHome from '../pages/ValentinaAtHome.vue';
import { ref, reactive, computed, onMounted  } from 'vue';
import GoogleMaps from 'google-maps-api-loader';
import pizza_png from '../assets/pizza.png';
import moscow_mule_png from '../assets/moscow-mule.png';
import salada_png from '../assets/salada.png';
import forno_png from '../assets/forno.png';
import cardapio from '../assets/Cardapio-Valentina-Pizzaria.pdf';

const introCarrosel = [pizza_png, moscow_mule_png, salada_png, forno_png]
</script>

<template>
    <div class="home" v-scroll.self="onScroll">
        <div class="full-grid section bg-secondary intro-grid">
            <div class="intro">
                <div class="left-grid bg-secondary paragraph py-9 px-3">
                    <div class="intro-text">
                        <CustomTitle spanText="A VALENTINA"></CustomTitle>
                        <h1 class="mt-12"> Tudo <br>Começa <br>em Pizza</h1>
                    </div>
                    <div class="grid-3-h intro-actions">
                        <a class="primary-btn" target="_blank" href="https://valentinapizzaria.com/">Faça seu pedido</a>
                        <a class="primary-btn" target="_blank" :href="cardapio">Cardápio</a>
                    </div>
                </div>
                <v-carousel
                    height="410px"
                    class="right-grid carousel"
                    min
                    aspect-ratio="16/9"
                    cover
                    :show-arrows="false"
                    cycle
                    hide-delimiters
                >
                    <v-carousel-item
                    v-for="(slide, i) in introCarrosel"
                    :key="i"
                    >
                        <v-img :src="slide" cover></v-img>
                    </v-carousel-item>
                </v-carousel>
            </div>
        </div>
        <Order-On-Website />
        <About-Valentina/>
        <Make-Your-Reserve />
        <Celebrate-Birthday />
        <Order-Valentina />
        <Valentina-At-Home />
        <Digital-Menu />
    </div>
</template>

<style lang="css">
.order-val {
    margin: auto;
}
.home {
    width: 100%;
    display: grid;
    grid-template-columns: 100%;
    background-color: white;
    margin-bottom: 3vh;
}
.intro {
    display: grid;
    grid-template-columns: 50% 50%;
}
.intro-actions {
    margin-top: 20px;
    display: grid;
    grid-template-columns: 70%;
    justify-content: flex-start;
    gap: 20px;
}
.intro-carrosel {
    overflow: hidden;
}

.intro .right-grid {
    width: 100%;
    height: 500px;
}
.section:not(.intro-grid) {
    margin-top: 1vh;
}

.starts-pizza {
    font-family: Rebecca Samuels Regular;
}

.carousel {
    min-width: 426px;
}

@media (max-width: 427px) {
    .home {
        max-width: 426px;
    }
}

@media (min-width: 800px) {
    .home > div {
        padding: 0 15vh !important;
    }

    .home > div:is(.bg-primary) {
        margin: 0 15vh;
        padding: 0 !important;
    }
}

@media (max-width: 800px) {

    .section {
        display: grid;
        grid-template-columns: 100% !important;
        gap: 1vh;
        margin-top: 0;
    }

    .home {
        margin-bottom: 0;
    }

    .intro {
        display: grid;
        grid-template-columns: 100%;
        grid-template-rows: 50% 50%;
        margin-bottom: 20px;
    }
    .home > div {
        padding: 0px 0px;
    }

    .order-valentina,
    .order-on-website {
        grid-template-columns: 100% !important;
    }

}
</style>