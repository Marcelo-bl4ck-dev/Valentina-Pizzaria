<script setup>
</script>
<template>
    <div class="full-grid text-white section bg-white order-valentina pa-10">
        <div class="paragraph content">
            <CustomTitle spanText="FAÇA UM PEDIDO NA VALENTINA"></CustomTitle>
            <h1 class="mb-7">Faça seu pedido</h1>
            <a href="https://deliverydireto.com.br/valentinapizzaria-jardimbotanico" target="_blank" class="secondary-btn">FAZER PEDIDO</a>
        </div>
    </div>
</template>
<style lang="css" scoped>
.order-valentina {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto !important;
    width: 75%;
}

.order-valentina .content *:not(.custom-title):not(a) {
    font-family: "Baskervville";
    font-weight: 100 !important;
    font-size: 70px;
    text-align: left;
}
.order-valentina {
    background-color: #B9844A !important;
}

@media (min-width: 800px) {
    .order-valentina {
        padding: 5vh !important;
    }
}
</style>