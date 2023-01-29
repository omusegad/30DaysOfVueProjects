<script setup>
import { useCartStore } from "@/stores/cart";
import {useProductStore} from "@/stores/products";
import { useRoute } from "vue-router";
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import LayoutDefault from '../components/layout/LayoutDefault.vue';

const route = useRoute();
const id = route.params.id;

const cartStore = useCartStore();
const { products, loading, error } = storeToRefs(useProductStore());
const { fetchProductById } = useProductStore();
const response = onMounted(() => fetchProductById(id));

console.log(id)

</script>

<template>
  <LayoutDefault>
    <div class="row">
      <div class="col-12">

      </div>
    </div>
  </LayoutDefault>
</template>
