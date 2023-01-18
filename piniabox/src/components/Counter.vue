<script setup>
import {useCounterStore} from "@/stores/counter"
import {useAuthStore} from "@/stores/auth"

const authStore = useAuthStore()
const counterStore = useCounterStore()
console.log(counterStore.count)
console.log(authStore.user)

</script>


<template>
    <!-- <pre>
        {{ authStore.fullName }}
    </pre> -->
    <h3 v-if="authStore.isAuthenticated">
        User Name : {{ authStore.fullname }} 
    </h3>
    <h1>
        <button @click="counterStore.decrement">-</button>
        counter : {{ counterStore.count }}
        <button @click="counterStore.increment">+</button>
    </h1>
    <br/>
    Digits count is :  {{ counterStore.countDigitsLength }} in length
</template>