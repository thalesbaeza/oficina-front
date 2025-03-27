<template>
  <header class="bg-white shadow-sm ml-64">
    <div class="px-4 sm:px-6 lg:px-8 py-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <button
            type="button"
            class="md:hidden p-2 rounded-md text-gray-400 hover:text-gray-500"
            @click="onMenuClick"
          >
            <MenuIcon class="h-6 w-6" />
          </button>
          <div class="ml-2 md:ml-0 text-xl font-medium text-gray-800 md:hidden">
            Car Mechanic Manager
          </div>
        </div>
        <div class="flex items-center space-x-4">
          <button class="p-1 rounded-full text-gray-400 hover:text-gray-500">
            <BellIcon class="h-6 w-6" />
          </button>
          <div class="flex items-center">
            <div class="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
              <UserIcon class="h-5 w-5 text-gray-500" />
            </div>
            <span class="ml-2 text-sm font-medium text-gray-700 hidden md:block"> Admin </span>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { MenuIcon, BellIcon, UserIcon } from "lucide-vue-next";

defineProps<{
  onMenuClick: () => void;
}>();
</script>
