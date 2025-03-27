<template>
  <div class="bg-white p-6 rounded-lg shadow">
    <div class="flex justify-between items-start">
      <div>
        <p class="text-sm font-medium text-gray-600">{{ title }}</p>
        <p class="text-2xl font-bold text-gray-800 mt-1">{{ value }}</p>
      </div>
      <div class="bg-blue-50 p-3 rounded-full">
        <component :is="iconComponent" :class="['h-6 w-6', color]" />
      </div>
    </div>
    <div class="flex items-center mt-4">
      <TrendingUpIcon class="h-4 w-4 text-green-500" />
      <span class="text-xs ml-1 text-green-500">{{ trend }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from "vue";
import { CarIcon, UsersIcon, ShoppingCartIcon, PackageIcon, TrendingUpIcon } from "lucide-vue-next";

const props = defineProps<{
  title: string;
  value: string;
  icon: string;
  color: string;
  trend: string;
}>();

const iconMap = {
  car: CarIcon,
  users: UsersIcon,
  "shopping-cart": ShoppingCartIcon,
  package: PackageIcon,
};

const iconComponent = computed(() => iconMap[props.icon as keyof typeof iconMap]);
</script>
