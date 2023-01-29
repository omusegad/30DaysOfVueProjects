<script setup>
import { RouterLink, RouterView } from "vue-router";
import { useCartStore } from "@/stores/cart";
import Footer from "@/components/Footer.vue";
const cartStore = useCartStore();
</script>

<template>
  <div class="app">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container">
        <a class="navbar-brand" href="#">ShopIt</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <RouterLink to="/">Home</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/note-app">Note App</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/help-center">Help Center</RouterLink>
            </li>
          </ul>
          <div class="cart-cont">
            <RouterLink to="/shopping-cart" class="btn cart-bx text-black">
              <i id="cart-ico" class="fa fa-shopping-cart fa-1x" aria-hidden="true">
                <span class="item-count-bx">
                  {{ cartStore.totalCartItem }}
                </span>
              </i>
              Cart
            </RouterLink>
          </div>
        </div>
      </div>
    </nav>
    <main class="main_layout">
      <slot />
    </main>
    <Footer />
  </div>
</template>
