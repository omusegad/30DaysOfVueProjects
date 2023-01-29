<script setup>
import axios from "axios";
import ProductsAPI from "@/services/ProductsAPI";
import { useCartStore } from "@/stores/cart";
import { useProductStore } from "@/stores/products";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";

const cartStore = useCartStore();
const { products, loading, error } = storeToRefs(useProductStore());
const { fetchProducts } = useProductStore();
onMounted(() => fetchProducts())

</script>

<template>
    <div class="col-4 mb-3" v-for="product in products" :key="product.id" v-if="{products}">
      <div class="card">
        <div class="card-body">
          <div class="card-blok">
            <div class="card-img">
              <router-link :to="{ name: 'product', params: { id: product.id } }">
                <img :src="product.image" />
              </router-link>
            </div>
            <h5 class="card-head pb-2 pt-2">
              <router-link :to="{ name: 'product', params: { id: product.id } }">
                {{ product.title }}
              </router-link>
            </h5>
            <h6 class="price-bx">Ksh {{ product.price }}</h6>
            <div class="rating">Rating: {{ product.rating.rate }}</div>
            <button
              class="mt-3 btn btn-outline-primary"
              @click="cartStore.addProductToCart(product)"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
</template>
