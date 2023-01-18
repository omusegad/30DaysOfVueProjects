import {defineStore} from 'pinia'

export const usePaidStore = defineStore('paid', {
    state: () => {
        return {
            isPaid: true
        }
    }
})