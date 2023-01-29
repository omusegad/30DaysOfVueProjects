<script setup> 
  import {ref, onMounted} from 'vue'
  const product_categories = ref([])


  onMounted(() => {
    try {
        fetch('https://fakestoreapi.com/products/categories')
        .then(res => res.json())
        .then(categories => {
            product_categories.value = categories
           // console.log( product_categories.value)
        })
    } 
    catch(e){
        console.log(e.message)
    }
 })

</script>
<template>
    <div class="card" v-if="{product_categories}">
    <div class="card-body">
        <ul class="menu-bx">
            <li v-for="cat in product_categories" :key="cat.id">
                <a href="">{{ cat }}</a>
            </li>
        </ul>
    </div>
    </div>
</template>