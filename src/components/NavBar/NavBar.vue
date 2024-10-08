<template>
    <header ref="navbar" id="nav-bar">
      <nav class="nav-links" :class="{ active: isMenuOpen }" ref="navLinks">
        <a @click="toggleMenu" class="logo" href="/">
            <img src="../../assets/logo.svg">
        </a>
        <a :href="cardapio" @click="toggleMenu" target="_blank" class="highlighted">Cardápio</a>
        <RouterLink @click="toggleMenu" to="/about-valentina">Sobre a Valentina</RouterLink>
        <RouterLink @click="toggleMenu" to="/valentina-at-home">Valentina em Casa</RouterLink>
        <RouterLink @click="toggleMenu" to="/birthdays">Aniversários</RouterLink>
        <RouterLink @click="toggleMenu" to="/reserves">Faça sua Reserva</RouterLink>
      </nav>
      <div class="hamburger" @click="toggleMenu">
        &#9776;
      </div>
      <div class="mobile-logo">
        <a class="logo" href="/">
            <img src="../../assets/logo.svg">
        </a>
      </div>
    </header>
</template>
  
<script setup>
import { ref } from 'vue';
import cardapio from '../../assets/Cardapio-Valentina-Pizzaria.pdf';
const navbar = ref(null);
const navLinks = ref(null);
const isMenuOpen = ref(false);

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

console.log(ref())

</script>
  
<style scoped>

header {
    position: fixed;
    top: 0;
    width: 100%;
    padding: 15px 30px;
    text-align: center;
    vertical-align: center;
    background-color: #2B3A41;
    color: white;
    display: flex;
    align-items: center;
    z-index: 1000;
    transition: top 0.3s;
    /* offset-x | offset-y | blur-radius | color */
    box-shadow: 0px 3px 0px #243136;
}

.logo {
    font-size: 20px;
}

.nav-links {
    margin-left: 1em;
    padding-right: 20px;
    display: flex;
    gap: 20px;
}

.nav-links a:not(.logo) {
    line-height: 1.5em;
    text-align: center;
}

.nav-links a:hover:not(.highlighted) {
    background-color: #B9844A;
    color: #2B3A41;
    border-radius: 4px;
}

.nav-links a {
    color: #B9844A;
    font-weight: bold;
    text-decoration: none;
    padding: 10px;
    transition: border 0.3s ease;
    align-self: center;
}

.hamburger {
    display: none;
    margin-right: 1em;
    font-size: 24px;
    cursor: pointer;
}

.mobile-logo {
    display: none;
}

.hide-nav {
    top: -80px;
}

.content {
    padding-top: 60px;
}

.highlighted {
    background-color: #B9844A;
    color: #2B3A41 !important;
    padding: 0.6em 1.5em !important;
    border-radius: 4px; 
}

@media (max-width: 768px) {
    .header {
        height: 200vh !important;
    }
    .nav-links {
        display: none;
        flex-direction: column;
        gap: 0;
        position: absolute;
        top: 60px;
        right: 0;
        background-color: #2B3A41;
        width: 100%;
    }

    .nav-links.active {
        display: grid;
    }

    .nav-links.active a {
        width: 50%;
        text-align: center;
        margin: auto;
    }

    .hamburger {
        display: block;
        color: #B9844A;
    }

    #nav-bar { /* Positions logo all the way to the right */
        justify-content: space-between;
    }

    .mobile-logo {
        display: flex;  
    }
}
</style>
  