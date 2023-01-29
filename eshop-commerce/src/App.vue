<script setup>
import { onErrorCaptured, ref } from "vue";
import { RouterView } from "vue-router";
import LayoutDefault from "./components/layout/LayoutDefault.vue";


const error = ref(null);
onErrorCaptured((e) => {
   error.value = e;
   return true
});


</script>
<template>
  <RouterView v-slot="{ Component }">
    <template v-if="Component">
      <Transition mode="out-in">
        <KeepAlive>
          <div class="space-up error" v-if="error">
            {{ error }}
          </div>
          <Suspense v-else>
            <!-- main content -->
            <component :is="Component"></component>

            <!-- loading state -->
            <template #fallback>
              <div class="loader1">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </template>
          </Suspense>
        </KeepAlive>
      </Transition>
    </template>
  </RouterView>
</template>
