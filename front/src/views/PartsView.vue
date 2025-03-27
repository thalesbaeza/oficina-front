<template>
  <div class="space-y-6">
    <h1 class="text-2xl font-bold text-gray-800">Gerenciar Peças</h1>
    <DataTable
      title="Peças"
      :columns="columns"
      :data="parts"
      :onAdd="handleAddPart"
      :onEdit="handleEditPart"
      :onDelete="handleDeletePart"
    />
  </div>
</template>

<script setup lang="ts">
import DataTable from "@/components/ui/DataTable.vue";

const parts = [
  {
    id: 1,
    part_name: "Filtro de Óleo",
    part_type: "Filtro",
    part_brand: "Tecfil",
    part_price: "R$ 25,90",
  },
  {
    id: 2,
    part_name: "Pastilha de Freio",
    part_type: "Freio",
    part_brand: "Fras-le",
    part_price: "R$ 89,90",
  },
  {
    id: 3,
    part_name: "Bateria 60Ah",
    part_type: "Elétrica",
    part_brand: "Moura",
    part_price: "R$ 359,90",
  },
];

const columns = [
  { header: "Nome", accessor: "part_name" },
  { header: "Tipo", accessor: "part_type" },
  { header: "Marca", accessor: "part_brand" },
  { header: "Preço", accessor: "part_price" },
];

const handleAddPart = () => {
  console.log("Add part");
};

const handleEditPart = (id: number) => {
  console.log("Edit part", id);
};

const handleDeletePart = (id: number) => {
  console.log("Delete part", id);
};
</script>
