<script setup>
</script>
<template>
    <div class="grid section bg-white celebrate-birthday py-7 px-3">
        <div class="grid-2-1-h">
            <div class="left-grid paragraph">
                <CustomTitle spanText="ANIVERSÁRIOS"/>
                <h1 class="velino">Venha comemorar seu aniversário aqui!</h1>
            </div>
        </div>
        <div class="grid-3-h gap-2">
            <div class="left-grid">
                <v-img height="300px" src="../assets/birthday-girl.png"></v-img>
                <p class="align-start">O aniversariante do dia ganha um presente: uma pizza individual doce, 
                    Nutella ou Macaquito. basta mostrar a identidade.</p>
            </div>
            <div class="middle-grid">
                <v-img height="300px" src="../assets/valentina-place.png"></v-img>
                <p class="align-start">Comemore seu aniversário no nosso mezanino da Asa Sul: minimo de 25 pessoas. 
                    São três tipos de cardápios, a partir de R$83,00 por pessoa, a bebida não está inclusa.</p>    
            </div>
            <div class="right-grid">
                <v-img height="300px" src="../assets/celebration-toast.png"></v-img>
                <p class="align-start">Ligue para (61) 3273-7009 para mais informações e reservas de datas.</p>
            </div>
        </div>
    </div>
</template>
<style lang="css">
.celebrate-birthday > div {
    margin-bottom: 2vh;
}

@media (max-width: 800px) {
    .celebrate-birthday .paragraph {
        padding: 3vh 0;
    }
    .celebrate-birthday > div {
        display: grid;
        grid-template-columns: 100% !important;
        gap: 1vh;
    }
}
</style>