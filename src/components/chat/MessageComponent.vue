<script setup>
import { useDarkModeStore } from '@/store/store';
import { ref, onMounted, computed } from 'vue';
import Send from '@/components/icons/Send.vue'

const darkModeStore = useDarkModeStore();
const isDarkMode = computed(() => darkModeStore.isDarkMode);
const imgURL = darkModeStore.url1
const imgURL2 = darkModeStore.url2
const chats = ref([])
const newMessage = ref('')
const randomText = ref('')

function saveChat() {
    if (newMessage.value != '') {
        let storedChats = JSON.parse(localStorage.getItem('chat')) || [];
        const newChat = {
            id: storedChats.length + 1,
            message: newMessage.value
        };
        storedChats.push(newChat);
        localStorage.setItem('chat', JSON.stringify(storedChats));
        chats.value.push(newChat);  // Actualiza la lista reactiva de chats
        newMessage.value = '';
        
    } else {
        alert('ingrese un mensaje')
    }
}

function generateRandomPhrase() {
    const words = [
        "hello", "world", "how", "are", "you", "today", "this", "is", "a", "test",
        "random", "phrase", "generator", "function", "example", "javascript", "code"
    ];
    
    const phraseLength = Math.floor(Math.random() * 6) + 1; // Generates a number between 1 and 4
    let phrase = [];

    for (let i = 0; i < phraseLength; i++) {
        const randomIndex = Math.floor(Math.random() * words.length);
        phrase.push(words[randomIndex]);
    }

    randomText.value = phrase.join(' ')
    return phrase.join(' ');
}

onMounted(() => {
    generateRandomPhrase()
    const storedChats = JSON.parse(localStorage.getItem('chat')) || [];
    chats.value = storedChats;
});

</script>

<template>

    <div class="flex flex-col justify-between mt-5 p-5 h-[600px] max-h-[600px]">
        <div class="flex-1 overflow-y-auto space-y-4">
            <div class="flex items-start justify-end space-x-4">
                <div :class="{ 'dark': isDarkMode }"
                    class=" bg-gray-800 text-white dark:bg-slate-400 dark:text-black rounded-lg p-3">
                    <p> {{ randomText }}</p>
                </div>
                    <RouterLink to="/">
                        <div class="relative">
                            <img :src="imgURL2" alt="User Avatar" class="rounded-full w-10 h-10  object-cover">
                            <span class="absolute bottom-0 right-0 block w-3 h-3 bg-green-500 rounded-full"></span>
                        </div>
                    </RouterLink>                
            </div>
            <div v-if="chats" v-for="item in chats" :key="item.id" class="flex items-start space-x-4">
                  <RouterLink to="/">
                    <div class="relative">
                        <img :src="imgURL" alt="User Avatar" class="rounded-full w-10 h-10 object-cover">
                        <span class="absolute bottom-0 right-0 block w-3 h-3 bg-green-500 rounded-full"></span>
                    </div>
                  </RouterLink>
               
                <div class="bg-blue-500 text-white rounded-lg p-3">
                    <p>{{ item.message }}</p>
                </div>
            </div>
        </div>

        <div class="flex items-start space-x-4 mt-4">
            <div class="w-10 h-10 bg-green-900 rounded-full overflow-hidden flex items-center justify-center">
                <button type="button" @click="saveChat()" class="text-white">
                <Send/>
                </button>
            </div>
            <div class="bg-gray-100 text-black rounded-lg p-3 flex-1">
                <input class="w-full bg-transparent focus:outline-none" v-model="newMessage"
                    placeholder="Escribe un mensaje" required>
            </div>
        </div>
    </div>
</template>