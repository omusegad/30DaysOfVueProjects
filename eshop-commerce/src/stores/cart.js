import { defineStore } from "pinia";    

export const useCartStore = defineStore('cart', {
    state: () => {
        return { 
            items: [],
        }
    },  
    getters:{
        totalCartItem: (state) => state.items.reduce((total, i) => total + i.quantity, 0),
        subTotal : (state) => state.items.reduce((total, i) => total + i.product.price * i.quantity, 0),
        taxTotal () {
            return this.subTotal * 0.1;
        },
        total(){
            return (this.subTotal + this.taxTotal).toFixed(2);
        },
       
    },
    actions: {
        addProductToCart(product){
            const existing_cart_item = this.items.find(i => i.product.id === product.id);
            if(existing_cart_item){
                existing_cart_item.quantity += 1;
                //console.log(existing_cart_item.quantity)
            }else{
                this.items.push({
                    product, 
                    quantity: 1
                });
               // console.log(this.items)
            }
        },
        removeProductFromCart (item) {
            const index = this.items.findIndex(i => i.id === item.id);
            this.items.splice(index, 1);
        },
    }
})  