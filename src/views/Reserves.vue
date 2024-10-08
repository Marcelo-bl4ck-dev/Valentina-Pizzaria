<script setup>
import Reserves from '../pages/Reserves.vue'
</script>

<template>
    <div class="reserves-page">
        <Reserves />
    </div>
</template>

<style lang="css">
.reserves-page {
    padding: 2vh 15vh;
}

@media (max-width: 800px){
    .reserves-page {
        padding: 2vh;
    }
}
</style>