<script setup>
import { defineProps } from 'vue'

defineProps({
    btnText: ""
})
</script>
<template>
    <v-btn 
        color="#B9844A" 
        width="14rem"
    >{{ btnText }}</v-btn>
</template>
