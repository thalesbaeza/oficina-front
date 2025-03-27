<template>
  <div class="space-y-6">
    <h1 class="text-2xl font-bold text-gray-800">Gerenciar Transações</h1>
    <DataTable
      title="Transações"
      :columns="columns"
      :data="transactions"
      :onAdd="handleAddTransaction"
      :onEdit="handleEditTransaction"
      :onDelete="handleDeleteTransaction"
    />
  </div>
</template>

<script setup lang="ts">
import DataTable from "@/components/ui/DataTable.vue";

const transactions = [
  {
    id: 1,
    car_model: "Fiat Uno",
    customer: "João Silva",
    transaction_date: "2023-05-15",
    transaction_type: "Venda",
    quantity: 1,
    transaction_value: "R$ 25.000,00",
    profit: "R$ 3.500,00",
  },
  {
    id: 2,
    car_model: "Volkswagen Golf",
    customer: "Maria Oliveira",
    transaction_date: "2023-05-10",
    transaction_type: "Venda",
    quantity: 1,
    transaction_value: "R$ 85.000,00",
    profit: "R$ 12.000,00",
  },
  {
    id: 3,
    car_model: "Ford Focus",
    customer: "Pedro Santos",
    transaction_date: "2023-05-05",
    transaction_type: "Compra",
    quantity: 1,
    transaction_value: "R$ 45.000,00",
    profit: "N/A",
  },
];

const columns = [
  { header: "Modelo", accessor: "car_model" },
  { header: "Cliente", accessor: "customer" },
  { header: "Data", accessor: "transaction_date" },
  { header: "Tipo", accessor: "transaction_type" },
  { header: "Quantidade", accessor: "quantity" },
  { header: "Valor", accessor: "transaction_value" },
  { header: "Lucro", accessor: "profit" },
];

const handleAddTransaction = () => {
  console.log("Add transaction");
};

const handleEditTransaction = (id: number) => {
  console.log("Edit transaction", id);
};

const handleDeleteTransaction = (id: number) => {
  console.log("Delete transaction", id);
};
</script>
