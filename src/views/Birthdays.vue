<script setup>
import CelebrateBirthday from '../pages/CelebrateBirthday.vue'
</script>

<template>
    <div class="birthdays-page">
        <CelebrateBirthday />
    </div>
</template>

<style lang="css">
.birthdays-page {
    padding: 2vh 15vh;
}

@media (max-width: 800px){
    .birthdays-page {
        padding: 2vh;
    }
}
</style>