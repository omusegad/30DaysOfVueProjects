import { defineStore } from 'pinia'
import {ref, computed} from "vue"


export const useCounterStore = defineStore('counter', () =>{
  const count = ref(3)
  const countDigitsLength = computed(() => count.toString().length)
 
 function increment (){
  this.count++
 }

  function   decrement() {
    this.count--
  }
  return{
    count, increment, decrement
  }
    
})

