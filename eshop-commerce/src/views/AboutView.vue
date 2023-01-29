<script setup>
import { computed, ref } from 'vue';
import AppButton from '@/components/AppButton.vue';

const notes = ref([]);
const new_note = ref('');

const notes_lenght = computed(() => notes.value.length);

const addNote = () => {
  notes.value.push(new_note.value);
  console.log(new_note.value);
  new_note.value = '';  
}

</script>


<template>
  <div class="container">
    <div class="row mt-3">
      <div class="col-6">
          <h3>Add Notes ({{ notes_lenght }})</h3>
          </div>
          <div class="col-6 text-end">
            <button class="btn btn-primary" @click="addNote">+</button>
          </div>
    </div>
    <div class="row mt-2">
        <div class="col">
          <div class="card-bx">
            <textarea rows="5" cols="173" name="note" v-model="new_note" placeholder="Add Note"></textarea>
          </div>
        </div>
    </div>

    <div class="row" v-if="notes">
      <div class="col-3 mt-2 mb-2" v-for="note in notes" :key="note">
        <div class="card" >
          <div class="card-body">
              {{ note }}
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <AppButton/>Primary<AppButton/>
        <AppButton/>Secondary<AppButton/>
      </div>
    </div>

  </div>
</template>

