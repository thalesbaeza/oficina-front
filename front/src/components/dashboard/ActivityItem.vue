<template>
  <div class="flex items-start">
    <div class="h-2 w-2 mt-2 rounded-full bg-blue-600"></div>
    <div class="ml-4">
      <p class="text-sm font-medium text-gray-800">{{ title }}</p>
      <p class="text-xs text-gray-500">{{ description }}</p>
      <p class="text-xs text-gray-400 mt-1">{{ time }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
  time: string;
}>();
</script>
