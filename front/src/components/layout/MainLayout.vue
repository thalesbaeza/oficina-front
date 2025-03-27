<template>
  <div class="flex h-screen bg-gray-100">
    <AppSidebar :isOpen="sidebarOpen" @close="sidebarOpen = false" />
    <div class="flex flex-col flex-1 overflow-hidden">
      <AppHeader :onMenuClick="() => (sidebarOpen = true)" />
      <main class="flex-1 overflow-y-auto md:p-6 ml-64">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { RouterView } from "vue-router";
import AppSidebar from "./Sidebar.vue";
import AppHeader from "./Header.vue";

const sidebarOpen = ref(false);
</script>
