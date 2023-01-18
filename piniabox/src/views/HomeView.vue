<script setup>
import {useAuthStore} from "@/stores/auth"
import {usePaidStore} from "@/stores/paid"
import Counter from "@/components/Counter.vue"

const authStore = useAuthStore()
const paidStore = usePaidStore()

console.log(authStore.isAuthenticated)
console.log(paidStore.isPaid)


</script>

<template>
  <main>
    <button @click="authStore.logout" v-if="authStore.isAuthenticated">Logout</button>
    <button @click="authStore.login" v-else>Login</button>

    <Counter/>
  </main>
</template>
