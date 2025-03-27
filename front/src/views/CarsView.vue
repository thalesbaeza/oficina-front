<script setup lang="ts">
import DataTable from "@/components/ui/DataTable.vue";

const mockCars = [
  { id: 1, car_model_name: "Fiat Uno", car_brand: "Fiat", car_year: 2019 },
  { id: 2, car_model_name: "Volkswagen Golf", car_brand: "Volkswagen", car_year: 2020 },
  { id: 3, car_model_name: "Ford Focus", car_brand: "Ford", car_year: 2018 },
  { id: 4, car_model_name: "Chevrolet Onix", car_brand: "Chevrolet", car_year: 2021 },
  { id: 5, car_model_name: "Toyota Corolla", car_brand: "Toyota", car_year: 2020 },
];

const columns = [
  { header: "Modelo", accessor: "car_model_name" },
  { header: "Marca", accessor: "car_brand" },
  { header: "Ano", accessor: "car_year" },
];

function handleAddCar() {
  console.log("Add car");
}
function handleEditCar(id: number) {
  console.log("Edit car", id);
}
function handleDeleteCar(id: number) {
  console.log("Delete car", id);
}
</script>

<template>
  <div class="space-y-6">
    <h1 class="text-2xl font-bold text-gray-800">Gerenciar Modelos de Carros</h1>
    <DataTable
      :columns="columns"
      :data="mockCars"
      title="Modelos de Carros"
      :onAdd="handleAddCar"
      :onEdit="handleEditCar"
      :onDelete="handleDeleteCar"
    />
  </div>
</template>
