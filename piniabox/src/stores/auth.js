import { ref,reactive, computed } from "vue"
import {defineStore} from 'pinia'

export const useAuthStore = defineStore('auth', () => {
    let isAuthenticated = ref(false)
    let user = reactive({})

    function  logout(){
        this.$patch((state) =>{
            state.isAuthenticated = false,
            state.user = {}
        })
    }
    async function login(){
        const res = await fetch('https://reqres.in/api/users/2')
        const user = await res.json()
        // console.log(data)
       // console.log(user.data)
        isAuthenticated =  true
    }

    const fullname = computed(() => {
        console.log(user.last_name)
        // `${user.value.first_name} ${user.value.last_name}`
    })

    return {isAuthenticated, logout,login, fullname}
          
})