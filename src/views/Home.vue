

<script setup>
import AboutValentina from '../pages/AboutValentina.vue';
import CelebrateBirthday from '../pages/CelebrateBirthday.vue';
import ValentinaAtHome from '../pages/ValentinaAtHome.vue';

</script>

<template>
    <div class="home">
        <Intro />
        <Order-On-App />
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
        padding: 0 12vh !important;
    }

    .home > div:is(.bg-primary) {
        margin: 0 12vh;
        padding: 0 !important;
    }
}

@media (max-width: 800px) {

    .intro-actions {
        width: 80%;
    }

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
    }
    .home > div {
        padding: 0px 0px;
    }

    .order-valentina,
    .order-on-app {
        grid-template-columns: 100% !important;
    }

}
</style>