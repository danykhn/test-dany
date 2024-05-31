<script setup>
import { RouterLink, RouterView } from 'vue-router'
import  NavbarComponent  from "./components/temaplate/Navbar.vue";
import { computed } from 'vue';
import { useDarkModeStore } from './store/store';


const darkModeStore = useDarkModeStore();
const isDarkMode = computed(() => darkModeStore.isDarkMode);

</script>

<template>
  <div :class="{'dark': isDarkMode }" class=" flex justify-center w-[400px] mx-auto shadow-lg p-5 mt-2 rounded-xl transition-colors duration-300 dark:bg-slate-800">
    <div class="">
      <NavbarComponent/>
      <RouterView />
    </div>
  </div>
</template>

