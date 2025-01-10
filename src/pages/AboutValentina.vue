<script setup>
</script>
<template>
    <div>
        <div class="grid-2-h section bg-white about-valentina">
            <div class="left-grid pizza-beer-cake">
            </div>
            <div class="right-grid paragraph about-valentina-text py-5 px-3">
                <CustomTitle spanText="A VALENTINA PIZZARIA"></CustomTitle>
                <h1 class="velino">Sabor e qualidade são sinônimos da Valentina Pizzaria.</h1>
                <p>
                    A casa foi inaugurada em dezembro 2006, na 214 norte, 
                    em Brasília, tendo à frente os empresários Robson Costa Cunha,
                    Margareth Finger, e suas filhas, Luana e Isabela Finger. 
                    Em outubro de 2010, ganha mais um endereço, desta vez, na 310 Sul.
                    Os ambientes das casas são arrojados, inovadores e levam a assinatura 
                    do arquiteto pernambucano Bruno Ferraz. A Valentina Pizzaria foi eleita 
                    a melhor de Brasília por 3 vezes da Revista Veja Comer &#38; Beber e 2 vezes 
                    da Revista Encontro Gastrô, sendo a atual campeã. Ficamos entre as 5 melhores 
                    pizzarias do país na Revista Prazeres da Mesa, de São Paulo. Levamos também o 
                    Terceiro lugar na Copa Brasileiras de Pizzarias, em 2009, no Anhembi, em São Paulo.
                </p>
                
            </div>
        </div>
        <div class="full-grid section bg-white mt-3 valentina-family">
            <v-img class="img" src="../assets/valentina-partners.png"></v-img>
        </div>
    </div>
</template>
<style lang="css">

.about-valentina-text p{
    text-justify: auto;
}

.pizza-beer-cake {
    background-image: url('../assets/img-3-parts.png');
    background-repeat: no-repeat;
    background-position: center;
    height: 557px;
    align-self: center;
}

</style>