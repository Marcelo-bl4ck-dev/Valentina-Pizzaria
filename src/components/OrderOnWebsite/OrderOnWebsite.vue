<script setup>
</script>
<template>
    <div class="grid-2-h section bg-white order-on-website">
        <div class="left-grid paragraph py-5 px-3">
            <div class="intro-text">
                <CustomTitle spanText="FAÇA SEU PEDIDO PELO SITE"></CustomTitle>
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
            <v-img class="img" cover src="../../assets/img-pizza-app.png"></v-img>
        </div>
    </div>
</template>
<style lang="css" scoped>
.order-on-website p {
    text-align: start;
    justify-content: space-around;
    margin-bottom: 1.5rem;
}
.order-on-website .right-grid {
    align-self: center;
}
</style>