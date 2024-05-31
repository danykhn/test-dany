import { defineStore } from 'pinia';
import { ref } from 'vue';
export const useDarkModeStore = defineStore('darkMode', {
  state: () => ({
    isDarkMode: localStorage.getItem('isDarkMode') === 'true',
    url1: 'https://i.pinimg.com/736x/78/96/6a/78966a57db808aea1aefd80ab9e32e09.jpg',
    url2: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3o35ppXg-FLYb0gs__ky-Mx0BX0PujABrZg&usqp=CAU',
    chats:[] 
    
  }),
  actions: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      localStorage.setItem('isDarkMode', this.isDarkMode);
      if (this.isDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    },

    initializeDarkMode() {
      if (this.isDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    },

    initialChat(){
      if (this.chats) {
        const savedChats = localStorage.getItem('chat');       
        this.chats.push(JSON.parse(savedChats));
      }
    },
     

  },
});