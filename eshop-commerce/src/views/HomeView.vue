<script setup>
import ProductSlider from '../components/ProductSlider.vue'
import ProductCategories from '@/components/ProductCategories.vue'
import ProductCard from '@/components/ProductCard.vue'
import HelpCenter from '../components/HelpCenter.vue';
import LayoutDefault from '../components/layout/LayoutDefault.vue';
</script>

<template>
  <LayoutDefault>
  <main class="container">
   <div class="row">
      <div class="container">
        <div class="row mb-4">
          <div class="col-3">
              <ProductCategories/>
            </div>
            <div class="col-7">
              <div class="card">
                <div class="card-body">
                  <ProductSlider/>
                </div>
              </div>
            </div>
            <div class="col-2">
              <HelpCenter/>
            </div>
        </div>
          <div class="row">
            <div class="col-12">
              <div class="row">
                <Suspense>
                  <template #default>
                    <ProductCard />
                  </template>
                  <template #fallback>
                    <div class="spinner-border text-success" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  </template>
                </Suspense>
              </div>
            </div>
          </div>
      </div>
   </div>
  </main>
</LayoutDefault>
</template>
