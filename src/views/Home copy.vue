<script setup>
import CustomTitle from '../components/CustomTitle/CustomTitle.vue';
import { ref, reactive, computed, onMounted  } from 'vue'

import pizza_png from '../assets/pizza.png'
import moscow_mule_png from '../assets/moscow-mule.png'
import salada_png from '../assets/salada.png'
import forno_png from '../assets/forno.png'

const introIndex = ref(0)
const sliderTimer = () => {
    var introCarrosel = [pizza_png, moscow_mule_png, salada_png, forno_png]
    introIndex.value += 1
    if (introIndex.value >= introCarrosel.length)
        introIndex.value = 0

    document.getElementsByClassName('intro')[0].style.backgroundImage = `url('${introCarrosel[introIndex.value]}')`
    setTimeout(sliderTimer, 2000);
}
onMounted(() => {
    sliderTimer()
})
</script>

<template>
    <div class="home">
        <div class="full-grid section intro-grid bg-secondary">
            <div class="intro grid-3-h">
                <div class="left-grid bg-secondary paragraph pt-8">
                    <div class="intro-text">
                        <CustomTitle spanText="A VALENTINA"></CustomTitle>
                        <h1 class="mt-12"> Tudo <br>Começa <br>em Pizza</h1>
                    </div>
                    <div class="grid-2-h intro-actions">
                        <button>Faça seu pedido</button>
                        <button>Cardápio</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="grid-2-h section bg-white order-on-website">
            <div class="left-grid paragraph">
                <div class="intro-text">
                    <CustomTitle spanText="Faça seu pedido pelo site"></CustomTitle>
                    <h1 class="velino">Site de Delivery Valentina Pizzaria</h1>
                    <p class="gray-highlight">Veja como funciona</p>

                    <p>Quando você indica um amigo no nosso site, <span class="gray-highlight">recebe 5% do valor de todos os 
                    pedidos dele na forma de desconto na sua próxima pizza!</span> E fica melhor: o amigo do seu amigo também 
                    te dá desconto! As próximas pessoas indicadas por aquela que você indicou podem te <span class="gray-highlight"> 
                    dar descontos sucessivos de 3%, 1% e 1%.</span></p>
                    
                    <p>Além disso, a nossa cortesia virou <span class="gray-highlight">Cashback no Site no valor de R$7,00</span>
                    por pedido feito, desconto que já pode ser utilizado a qualquer momento.</p>
                   
                    <p>O novo Site não precisa ser baixado, basta clicar em <span class="gray-highlight">FAÇA SEU PEDIDO</span>
                    ou entrar em <a href="https://valentinapizzaria.com/">valentinapizzaria.com</a> e fixar como um ícone na tela de início do seu celular.</p>
                    
                    <p class="italic-gray-obs">Aproveite e peça nossas delícias com descontos e benefícios exclusivos!</p>
                </div>
            </div>
            <div class="right-grid">
                <v-img class="img" src="../assets/img-pizza-app.png"></v-img>
            </div>
        </div>
        <div class="grid-1-2-h section bg-white about-valentina">
            <div class="left-grid pizza-beer-cake"></div>
            <div class="right-grid paragraph about-valentina-text">
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
        <div class="grid-2-h section bg-white make-your-reserve mt-2">
            <div class="left-grid paragraph">
                <CustomTitle spanText="A VALENTINA"></CustomTitle>
                <h1 class="mb-7">Faça sua reserva</h1>
                <a class="whatsapp-reserve-link" href="https://api.whatsapp.com/send?phone=5561986160909&text=Ol%C3%A1!%20Gostaria%20de%20fazer%20uma%20reserva!" target="_blank">
                    <img width="150px" height="150px" src="../assets/whatsapp.svg">
                </a>
            </div>
            <div class="right-grid">
                <div class="bg-light-gray paragraph pa-12 reserve-home">
                    <h2 class="pb-4">Para reservas e Valentina em Casa</h2>
                    
                    <h2 class="pb-3">(61) 3273-7009</h2>
                    <h3>valentinapizzaria@hotmail.com</h3>
                    <h3><a class="insta-link" href="https://www.instagram.com/valentinapizzaria/" target="_blank">@valentinapizzaria</a></h3>
                </div>
            </div>
        </div>
        <div class="grid-2-v section bg-white celebrate-birthday">
            <div class="top-grid paragraph">
                <div class="left-grid">
                    <CustomTitle spanText="Aniversários"/>
                    <h1>Venha comemorar seu aniversário aqui!</h1>
                </div>
                <div class="right-grid grid-2-1-v">
                    <v-img class="img" width="100%" height="85%" src="../assets/pizza-ice-chocolate.png"></v-img>
                </div>
            </div>
            <div class="bottom-grid"></div>
        </div>
        
    </div>
</template>

<style lang="css">
.velino {
    font-family: "Baskervville";
    font-weight: 100 !important;
    font-size: 70px;
    text-align: left;
}
.order-on-website p {
    text-align: start;
    justify-content: space-around;
    margin-bottom: 1.5rem;
}
.intro-actions {
    margin-top: 20px;
    display: grid;
    grid-template-columns: 70%;
    justify-content: flex-start;
    gap: 20px;
}
.home {
    width: 100%;
    display: grid;
    grid-template-columns: 100%;
    background-color: white;
    margin-bottom: 10vh;
}
.intro-grid {
    padding-left: 20vh;
    padding-right: 20vh;
}
.intro {
    height: 500px;
    background-image: url('../assets/pizza.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: right;
}
.pizza-beer-cake {
    background-image: url('../assets/img-3-parts.png');
    background-repeat: no-repeat;
    background-position: center;
    height: 557px;
}
.intro-carrosel {
    overflow: hidden;
}

.intro-carrosel .img {
    height: 100% !important;
    z-index: 0;
}
.left-grid h1,
.right-grid h1 {
    text-align: start;
}
/*
.valentina-family {
    background-image: url('../assets/valentina-partners.png');
    background-size: 100%;
    background-position: center;

}
*/

.carrosel {
    display: block;
    margin-top: 160px;
    z-index: 30;
    background-image: url('../assets/forno.png');
    background-repeat: no-repeat;
}

.home > div:not(.intro-grid) {
    margin-left: 20vh;
    margin-right: 20vh;
}

.starts-pizza {
    font-family: Rebecca Samuels Regular;
}

.order-on-website .img {
    height: 100%;
}
.about-valentina-text p{
    text-justify: auto;

}
.make-your-reserve {
    background-color: #B9844A !important;
}
.make-your-reserve .left-grid {
    color: white;
    padding: 5vh;
}
.make-your-reserve .right-grid {
    color: black;
    background-image: url('../assets/bg-reserve-home.png');
    background-size: 100% 100%;
}
.make-your-reserve {
    background-color: #B9844A;
}

.paragraph *:is(.whatsapp-reserve-link) {
    display: block;
    text-align: center;
}
.reserve-home {
    overflow: hidden;
}
@media (max-width: 768px) {

    
    
    .home > div:not(.intro-grid) {
        margin-left: 1vh;
        margin-right: 1vh;
    }


    .intro { /* Make carrosel appear vertically in relation to paragraph/actions section */
        display: grid;
        grid-template-columns: 55% !important;
    }

    .about-valentina,
    .make-your-reserve,
    .intro-actions {
        display: grid;
        grid-template-columns: 100% !important;
        gap: 1vh;
    }
    .home > div {
        padding: 0px 4px;
    }

    .order-on-website {
        grid-template-columns: 100% !important;
    }

}
</style>