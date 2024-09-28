<script setup>
import { defineProps } from 'vue'

defineProps({
    spanText: ""
})

</script>
<template>
    <span class="font-weight-500 custom-title"><hr class="hr-text">{{ spanText }}</span><br>
</template>
<style lang="css">

.custom-title {
    font-family: "Baskervville";
    font-size: 1.1rem;
}

.hr-text {
    border: 0.02rem solid;
    width: 60px;
    display: inline-flex;
    align-self: center;
    margin-bottom: 0.3rem;
    margin-right: 1rem;
}
</style>