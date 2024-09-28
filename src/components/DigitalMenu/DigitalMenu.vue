<script setup>
import cardapio from '../../assets/Cardapio-Valentina-Pizzaria.pdf'
import menuCover from '../../assets/menu-cover.jpg'
</script>
<template>
    <div class="grid-2-h section bg-primary digital-menu">
        <div class="left-grid">
            <v-img cover max-height="300" class="img" aspect-ratio="16/9" :src="menuCover">
                
            </v-img>
        </div>
        <div class="right-grid paragraph px-7 py-4">
            <CustomTitle spanText="CARDÁPIO DIGITAL"/>
            <h1 class="velino mb-7">Veja nosso cardápio</h1>
            <a :href="cardapio" target="_blank" class="secondary-btn">ABRIR CARDÁPIO</a>
        </div>
    </div>
</template>
<style lang="css" scoped>
.digital-menu{
    background-color: #B9844A !important;
}
.digital-menu .right-grid {
    align-self: center;
    color: white;
    height: 250px;
}

</style>