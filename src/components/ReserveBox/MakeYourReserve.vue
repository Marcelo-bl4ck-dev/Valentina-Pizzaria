<template>
    <div class="grid-1-2-h section bg-primary make-your-reserve mt-2">
        <div class="left-grid paragraph">
            <CustomTitle spanText="A VALENTINA"></CustomTitle>
            <h1 class="mt-3 velino">Faça seu evento com a Valentina</h1>
        </div>
        <div class="right-grid">
            <div class="bg-light-gray paragraph py-10 px-8 reserve-home">
                <h2 class="pb-4">Para mais informações:</h2>
                <h2 class="pb-3">(61) 3273-7009<br>(61) 98616-0909</h2>
                <h3>valentinapizzaria@hotmail.com</h3>
                <h3><a class="insta-link" href="https://www.instagram.com/valentinapizzaria/" target="_blank">@valentinapizzaria</a></h3>
            </div>
        </div>
    </div>
</template>
<style lang="css" scoped>
.make-your-reserve {
    background-color: #B9844A !important;
    height: 400px;
}
.make-your-reserve .left-grid {
    color: white;
    padding-left: 5vh;
    padding-top: 5vh;
}
.make-your-reserve .right-grid {
    color: black;
    background-image: url('../../assets/bg-reserve-home.jpg');
    background-size: 100% 100%;
}
.paragraph *:is(.whatsapp-reserve-link) {
    display: block;
    text-align: center;
}
.reserve-home {
    overflow: hidden;
}

@media (max-width: 800px){
    .make-your-reserve {
        height: 100%;
    }
    .make-your-reserve .left-grid {
        padding: 0;
        padding-left: 25px;
        padding-top: 25px;
    }
}
</style>