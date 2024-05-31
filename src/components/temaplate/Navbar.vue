<script setup>
import { useDarkModeStore } from '@/store/store';
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import Arrow from '../icons/Arrow.vue'

const darkModeStore = useDarkModeStore();
const isDarkMode = computed(() => darkModeStore.isDarkMode);

const route = useRoute();
const currentPath = computed(() => route.path);

</script>


<template>
<div :class="{'dark': isDarkMode}" class="flex items-center bg-gray-800 text-white  dark:bg-indigo-700  p-4 w-[400px]">

  <router-link v-if="currentPath == '/chat'" to="/">
  <button class=" relative left-0">
 <Arrow/>
  </button>
</router-link>
  <div class="flex mx-auto justify-center">
    <span class="text-xl font-bold">Sophie</span>  
  </div>
 
</div>
</template>