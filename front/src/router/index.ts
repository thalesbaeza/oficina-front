import { createRouter, createWebHistory } from "vue-router";
import MainLayout from "@/components/layout/MainLayout.vue";
import DashboardView from "@/views/DashboardView.vue";
import CarsView from "@/views/CarsView.vue";
import CustomersView from "@/views/CustomersView.vue";
import TransactionsView from "@/views/TransactionsView.vue";
import PartsView from "@/views/PartsView.vue";
import SuppliersView from "@/views/SuppliersView.vue";
import InventoryView from "@/views/InventoryView.vue";

const routes = [
  {
    path: "/",
    redirect: "/dashboard",
    component: MainLayout,
    children: [
      { path: "dashboard", component: DashboardView },
      { path: "cars", component: CarsView },
      { path: "customers", component: CustomersView },
      { path: "transactions", component: TransactionsView },
      { path: "parts", component: PartsView },
      { path: "suppliers", component: SuppliersView },
      { path: "inventory", component: InventoryView },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
