<script setup>
import { useDarkModeStore } from '../../store/store';
import { computed } from 'vue';
import Star from '../icons/Star.vue';

const darkModeStore = useDarkModeStore();
const isDarkMode = computed(() => darkModeStore.isDarkMode);
const toggleDarkMode = darkModeStore.toggleDarkMode;
const imgURL = darkModeStore.url1


</script>

<template>
  <div :class="{ 'dark': isDarkMode }" class="transition-colors duration-300">
    <div class="mt-8 flex items-center justify-center">
      <!-- Imagen -->
      <div class="flex relative">
        <router-link :to="'/chat'">
          <img class="h-72 w-72 rounded-full " :src="imgURL" alt="Profile Image" />
        </router-link>
        <div class="absolute ml-56 h-20 w-20 rounded-full bg-green-500 shadow-xl">
          <p class="mt-7 text-center font-bold text-white">ONLINE</p>
        </div>
      </div>
    </div>

    <div class="bg-white dark:bg-gray-800 dark:text-white p-6 rounded-lg mt-8">
      <div class="flex justify-between items-center">
        <div>
          <h2 class="text-2xl">Sophie, 22</h2>
          <p class="text-pink-500 font-bold">New York</p>
        </div>
        <div class="text-gray-400 mb-6">
          <Star class="dark:text-yellow-400" />
        </div>
      </div>
      <p class="mt-4 text-gray-600 dark:text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.</p>
    </div>

    <div class="flex justify-center mt-6">
      <button class="transition-colors duration-300 w-[350px] bg-slate-800 dark:bg-indigo-700 p-4 m-3 text-white" @click="toggleDarkMode">
        {{ isDarkMode ? 'Añadir como amig@' : 'Añadir como amig@' }}
      </button>
    </div>
  </div>
   
</template>