<template>
  <div class="space-y-6">
    <h1 class="text-2xl font-bold text-gray-800">Dashboard</h1>

    <!-- Cards Estatísticos -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <StatCard
        title="Total de Carros"
        value="24"
        icon="car"
        color="text-blue-600"
        trend="+5% desde o último mês"
      />
      <StatCard
        title="Total de Clientes"
        value="156"
        icon="users"
        color="text-green-600"
        trend="+12% desde o último mês"
      />
      <StatCard
        title="Transações"
        value="1,234"
        icon="shopping-cart"
        color="text-purple-600"
        trend="+8% desde o último mês"
      />
      <StatCard
        title="Peças em Estoque"
        value="532"
        icon="package"
        color="text-orange-600"
        trend="-3% desde o último mês"
      />
    </div>

    <!-- Gráficos e Atividades -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <!-- Chart -->
      <div class="bg-white p-4 rounded-lg shadow">
        <h2 class="text-lg font-medium text-gray-800 mb-4">Transações Mensais</h2>
        <div class="h-80">
          <Bar :data="chartData" :options="chartOptions" />
        </div>
      </div>

      <!-- Atividades -->
      <div class="bg-white p-4 rounded-lg shadow">
        <h2 class="text-lg font-medium text-gray-800 mb-4">Relatório de Atividades Recentes</h2>
        <div class="space-y-4">
          <ActivityItem
            title="Nova transação de compra"
            description="Cliente: João Silva, Carro: Fiat Uno 2019"
            time="Há 2 horas"
          />
          <ActivityItem
            title="Estoque atualizado"
            description="20 novas peças adicionadas ao estoque"
            time="Há 5 horas"
          />
          <ActivityItem
            title="Nova venda registrada"
            description="Cliente: Maria Oliveira, Carro: Volkswagen Golf 2020"
            time="Há 1 dia"
          />
          <ActivityItem
            title="Fornecedor adicionado"
            description="Auto Peças Genuínas Ltda."
            time="Há 2 dias"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

import StatCard from "@/components/dashboard/StatCard.vue";
import ActivityItem from "@/components/dashboard/ActivityItem.vue";

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const chartData = {
  labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
  datasets: [
    {
      label: "Transações",
      data: [4000, 3000, 5000, 2780, 1890, 2390],
      backgroundColor: "#3b82f6",
    },
  ],
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
};
</script>
