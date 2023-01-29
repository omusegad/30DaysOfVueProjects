import { defineStore } from "pinia";    

export const useProductStore = defineStore('products', {   
    state: () => {
        return { 
            products: [],
            loading: false,
            error: null
         }
    },
    getters: {},
    actions: {
        async fetchProducts(){
            try{
                const response = await fetch('https://fakestoreapi.com/products');
                const data = await response.json();
                this.products = data;
                this.loading = false;
            }catch(error){
                this.error = error;
                this.loading = false;
            }finally{
                this.loading = false;
            }
        },
        async fetchProductById(id){
            try{
                const response = await fetch(`https://fakestoreapi.com/products/${id}`);
                const data = await response.json();
                return data;
                this.loading = false;
            }catch(error){
                this.error = "Ops sorry, we have expereinced an error while trying your request";
                this.loading = false;
            }finally{
                this.loading = false;
            }
        }
    }
})