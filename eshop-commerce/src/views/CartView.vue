<script setup>
import { useCartStore } from "@/stores/cart";
import LayoutDefault from "../components/layout/LayoutDefault.vue";
const cartStore = useCartStore();

// console.log(cartStore.items);
</script>

<template>
  <layoutDefault>
  <main class="container">
    <div class="row" v-if="cartStore.totalCartItem">
        <h5>Cart ( {{ cartStore.totalCartItem }} )</h5>
      <div class="col-9">
        <hr/>
        <div class="table-responsive">
          <table class="table text-nowrap">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Product</th>
                <th scope="col">Price</th>
                <th scope="col" class="quant-bx text-center">Quantity</th>
                <th scope="col">Remove</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="({ product }, i) in cartStore.items" :key="product.id">
                <td>
                  <div class="prod-img">
                    <img :src="product.image" />
                  </div>
                </td>
                <td class="pt-2 text-start">{{ product.title }}</td>
                <td>Ksh {{ product.price }}</td>
                <td class="text-center">
                  <div class="p-3">
                    <div
                      class="input-group w-auto justify-content-end align-items-center"
                    >
                      <input
                        type="button"
                        value="-"
                        class="button-minus border icon-shape icon-sm mx-1"
                      @click="removeQuantity"/>
                    
                      <input 
                        type="number"
                        step="1"
                        max="100"
                        min="0"
                        v-model="cartStore.items[i].quantity"
                        name="quantity"
                        placeholder="{{cartStore.items[i].quantity}}"
                        class="quantity-field text-center quantity-bx"
                      />
                      <input
                        type="button"
                        value="+"
                        class="button-plus border icon-sm lh-0"
                        @click="i"/>
                    </div>
                  </div>
                </td>
                <td class="text-center">
                <button class="btn btn-outline-danger mt-3" @click="cartStore.removeProductFromCart(product)"> x </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <div class="col-3 pt-4">
        <div class="card total-bx">
          <div class="card-body">
            <h4>
                Cart Sammary
            </h4>
            <hr/>
            <ul>
              <ul>
                <li>subTotal : Ksh {{ cartStore.subTotal.toFixed(2) }}</li>
                <li>Tax : Ksh {{ cartStore.taxTotal.toFixed(2) }}</li>
                <li>Total : Ksh {{ cartStore.total }}</li>
              </ul>
            </ul>
            <button class="btn btn-info">Checkout</button>
          </div>
        </div>
      </div>

    </div>
    <div class="row" v-else>
      <div class="col-12">
        <h4 class="text-center">Your cart is empty</h4>
      </div>
      <div class="col-12 ms-auto text-center">
        <h4>
          Cart is empty , Continue
          <router-link :to="{ name: 'home' }" class="btn btn-outline-success">
            Shopping
          </router-link>
        </h4>
      </div>
    </div>
  </main>
</layoutDefault>
</template>
