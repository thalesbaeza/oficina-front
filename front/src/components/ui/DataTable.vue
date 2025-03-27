<template>
  <div class="bg-white shadow rounded-lg overflow-hidden">
    <div class="p-4 border-b border-gray-200 flex justify-between items-center">
      <h2 class="text-lg font-medium text-gray-800">{{ title }}</h2>
      <button
        v-if="onAdd"
        @click="onAdd"
        class="bg-blue-600 text-white px-3 py-1 rounded-md text-sm flex items-center hover:bg-blue-700"
      >
        <PlusIcon class="h-4 w-4 mr-1" />
        Adicionar
      </button>
    </div>

    <div class="overflow-x-auto">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th
              v-for="(column, index) in columns"
              :key="index"
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              {{ column.header }}
            </th>
            <th
              v-if="onEdit || onDelete"
              class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Ações
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-if="paginatedData.length === 0">
            <td
              :colspan="columns.length + (onEdit || onDelete ? 1 : 0)"
              class="px-6 py-4 text-center text-sm text-gray-500"
            >
              Nenhum dado encontrado
            </td>
          </tr>
          <tr v-for="(row, rowIndex) in paginatedData" :key="rowIndex" class="hover:bg-gray-50">
            <td
              v-for="(column, colIndex) in columns"
              :key="colIndex"
              class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
            >
              {{ row[column.accessor] }}
            </td>
            <td
              v-if="onEdit || onDelete"
              class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
            >
              <div class="flex justify-end space-x-2">
                <button
                  v-if="onEdit"
                  @click="onEdit(Number(row.id))"
                  class="text-indigo-600 hover:text-indigo-900"
                >
                  <EditIcon class="h-4 w-4" />
                </button>
                <button
                  v-if="onDelete"
                  @click="onDelete(Number(row.id))"
                  class="text-red-600 hover:text-red-900"
                >
                  <TrashIcon class="h-4 w-4" />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div
      v-if="totalPages > 1"
      class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
    >
      <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <p class="text-sm text-gray-700">
          Mostrando
          <span class="font-medium">{{ startItem }}</span>
          a
          <span class="font-medium">{{ endItem }}</span>
          de
          <span class="font-medium">{{ data.length }}</span>
          resultados
        </p>
        <nav
          class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
          aria-label="Pagination"
        >
          <button
            @click="currentPage = 1"
            :disabled="currentPage === 1"
            class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium"
            :class="currentPage === 1 ? 'text-gray-300' : 'text-gray-500 hover:bg-gray-50'"
          >
            <ChevronsLeftIcon class="h-5 w-5" />
          </button>
          <button
            @click="currentPage = Math.max(currentPage - 1, 1)"
            :disabled="currentPage === 1"
            class="relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium"
            :class="currentPage === 1 ? 'text-gray-300' : 'text-gray-500 hover:bg-gray-50'"
          >
            <ChevronLeftIcon class="h-5 w-5" />
          </button>
          <span
            class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium"
          >
            {{ currentPage }} de {{ totalPages }}
          </span>
          <button
            @click="currentPage = Math.min(currentPage + 1, totalPages)"
            :disabled="currentPage === totalPages"
            class="relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium"
            :class="currentPage === totalPages ? 'text-gray-300' : 'text-gray-500 hover:bg-gray-50'"
          >
            <ChevronRightIcon class="h-5 w-5" />
          </button>
          <button
            @click="currentPage = totalPages"
            :disabled="currentPage === totalPages"
            class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium"
            :class="currentPage === totalPages ? 'text-gray-300' : 'text-gray-500 hover:bg-gray-50'"
          >
            <ChevronsRightIcon class="h-5 w-5" />
          </button>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
  EditIcon,
  TrashIcon,
  PlusIcon,
} from "lucide-vue-next";
import { computed, ref } from "vue";

interface Column {
  header: string;
  accessor: string;
}
interface DataTableProps {
  title: string;
  data: Record<string, unknown>[];
  itemsPerPage?: number;
  columns: Column[];
  onAdd?: () => void;
  onEdit?: (id: number) => void;
  onDelete?: (id: number) => void;
}

const props = defineProps<DataTableProps>();

const itemsPerPage = props.itemsPerPage ?? 10;

const currentPage = ref(1);

const totalPages = computed(() => Math.ceil(props.data.length / itemsPerPage));
const paginatedData = computed(() =>
  props.data.slice((currentPage.value - 1) * itemsPerPage, currentPage.value * itemsPerPage)
);
const startItem = computed(() => (currentPage.value - 1) * itemsPerPage + 1);
const endItem = computed(() => Math.min(currentPage.value * itemsPerPage, props.data.length));
</script>
