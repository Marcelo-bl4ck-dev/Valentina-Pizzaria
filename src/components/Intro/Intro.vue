
<script setup>
import cardapio from '@/assets/Cardapio-Valentina-Pizzaria.pdf';
import pizza_png from '@/assets/pizza.png';
import moscow_mule_png from '@/assets/moscow-mule.png';
import salada_png from '@/assets/salada.png';
import forno_png from '@/assets/forno.png';
import ReserveWidget from '../ReserveBox/ReserveWidget.vue';

const introCarrosel = [pizza_png, moscow_mule_png, salada_png, forno_png]
</script>

<template>
    <div class="full-grid section bg-secondary intro-grid">
        
        <div class="intro">
            <div class="left-grid bg-secondary paragraph py-9 px-3">
                <div class="intro-text">
                    <CustomTitle spanText="A VALENTINA"></CustomTitle>
                    <h1 class="mt-12"> Tudo <br>Começa <br>em Pizza</h1>
                </div>
                <div class="grid-2-h intro-actions">
                    <a class="primary-btn" target="_blank" href="https://deliverydireto.com.br/valentinapizzaria-jardimbotanico">Faça seu pedido</a>
                    <a class="primary-btn" target="_blank" :href="cardapio">Cardápio</a>
                </div>
                <div class="grid-2-h intro-actions">
                    <v-dialog max-width="500">
                        <template v-slot:activator="{ props: activatorProps }">
                          <a
                            v-bind="activatorProps"
                            class="primary-btn reserve-btn"
                          >Faça sua reserva</a>
                        </template>
                      
                        <template v-slot:default="{ isActive }">
                          <ReserveWidget></ReserveWidget>
                        </template>
                    </v-dialog>
                </div>
            </div>
            <v-carousel
                height="450px"
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
</template>

<style>
.reserve-btn:hover {
    cursor: pointer;
}

.intro-actions {
    margin-right: 20px;
}
</style>