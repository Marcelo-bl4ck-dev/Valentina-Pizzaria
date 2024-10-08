
import Home from '../views/Home.vue'
import Birthdays from '../views/Birthdays.vue'
import AboutValentina from '../views/About.vue'
import ValentinaAtHome from '../views/ValentinaAtHome.vue'
import Reserves from '../views/Reserves.vue'
import Cardapio from '../assets/Cardapio-Valentina-Pizzaria.pdf'

export const routes = [
    { path: "/", name: "Home", component: Home },
    { path: "/about-valentina", name: "AboutValentina", component: AboutValentina}, 
    { path: "/valentina-at-home", name: "ValentinaAtHome", component: ValentinaAtHome },
    { path: "/birthdays", name: "Birthdays", component: Birthdays },
    { path: "/reserves", name:"", component: Reserves},
    { path: "/Cardapio-Valentina-Pizzaria", name: "Menu", component: Cardapio}
]
