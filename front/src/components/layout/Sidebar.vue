<template>
  <div
    class="fixed inset-0 z-40 md:hidden transition-opacity duration-300 ease-linear"
    :class="{ 'opacity-100': isOpen, 'opacity-0 pointer-events-none': !isOpen }"
  >
    <div class="absolute inset-0 bg-gray-600 opacity-75" @click="$emit('close')" />
    <div class="fixed inset-y-0 left-0 flex flex-col z-40 w-64 bg-gray-800 text-white">
      <div class="flex items-center justify-between h-16 px-4 border-b border-gray-700">
        <span class="text-xl font-bold">Car Mechanic Manager</span>
        <button @click="$emit('close')" class="p-1 rounded-md text-gray-300 hover:text-white">
          <XIcon size="24" />
        </button>
      </div>
      <nav class="flex-1 px-2 py-4 space-y-1">
        <RouterLink
          v-for="item in navigation"
          :key="item.name"
          :to="item.path"
          class="flex items-center px-4 py-2 text-sm rounded-md"
          :class="{
            'bg-gray-900 text-white': $route.path === item.path,
            'text-gray-300 hover:bg-gray-700 hover:text-white': $route.path !== item.path,
          }"
          @click="$emit('close')"
        >
          <component :is="item.icon" class="mr-3 h-5 w-5" />
          {{ item.name }}
        </RouterLink>
      </nav>
    </div>
  </div>

  <!-- Desktop -->
  <div class="hidden md:flex md:flex-col md:w-64 md:fixed md:inset-y-0 bg-gray-800 text-white">
    <div class="flex items-center h-16 px-4 border-b border-gray-700">
      <span class="text-xl font-bold">Car Mechanic Manager</span>
    </div>
    <nav class="flex-1 px-2 py-4 space-y-1">
      <RouterLink
        v-for="item in navigation"
        :key="item.name"
        :to="item.path"
        class="flex items-center px-4 py-2 text-sm rounded-md"
        :class="{
          'bg-gray-900 text-white': $route.path === item.path,
          'text-gray-300 hover:bg-gray-700 hover:text-white': $route.path !== item.path,
        }"
      >
        <component :is="item.icon" class="mr-3 h-5 w-5" />
        {{ item.name }}
      </RouterLink>
    </nav>
  </div>
</template>

<script setup lang="ts">
import {
  HomeIcon,
  CarIcon,
  UsersIcon,
  ShoppingCartIcon,
  PackageIcon,
  TruckIcon,
  BarChart2Icon,
  XIcon,
} from "lucide-vue-next";

defineProps<{
  isOpen: boolean;
}>();

defineEmits(["close"]);

const navigation = [
  { name: "Dashboard", icon: HomeIcon, path: "/" },
  { name: "Carros", icon: CarIcon, path: "/cars" },
  { name: "Clientes", icon: UsersIcon, path: "/customers" },
  { name: "Transações", icon: ShoppingCartIcon, path: "/transactions" },
  { name: "Peças", icon: PackageIcon, path: "/parts" },
  { name: "Fornecedores", icon: TruckIcon, path: "/suppliers" },
  { name: "Estoque", icon: BarChart2Icon, path: "/inventory" },
];
</script>
