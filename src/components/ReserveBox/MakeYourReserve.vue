<template>
    <div class="grid-2-h section bg-primary make-your-reserve mt-2">
        <div class="left-grid paragraph">
            <CustomTitle spanText="A VALENTINA"></CustomTitle>
            <h1 class="mb-7">Faça sua reserva</h1>
            <a class="whatsapp-reserve-link" href="https://api.whatsapp.com/send?phone=5561986160909&text=Ol%C3%A1!%20Gostaria%20de%20fazer%20uma%20reserva!" target="_blank">
                <img width="150px" height="150px" src="../../assets/whatsapp.svg">
            </a>
        </div>
        <div class="right-grid">
            <div class="bg-light-gray paragraph py-10 px-8 reserve-home">
                <h2 class="pb-4">Para reservas e Valentina em Casa</h2>
                <h2 class="pb-3">(61) 3273-7009</h2>
                <h3>valentinapizzaria@hotmail.com</h3>
                <h3><a class="insta-link" href="https://www.instagram.com/valentinapizzaria/" target="_blank">@valentinapizzaria</a></h3>
            </div>
        </div>
    </div>
</template>
<style lang="css" scoped>
.make-your-reserve {
    background-color: #B9844A !important;
}
.make-your-reserve .left-grid {
    color: white;
    padding: 5vh;
}
.make-your-reserve .right-grid {
    color: black;
    background-image: url('../../assets/bg-reserve-home.png');
    background-size: 100% 100%;
}
.paragraph *:is(.whatsapp-reserve-link) {
    display: block;
    text-align: center;
}
.reserve-home {
    overflow: hidden;
}
</style>