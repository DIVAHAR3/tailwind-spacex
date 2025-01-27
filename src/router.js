// src/router.js
import { createRouter, createWebHistory } from "vue-router";
import OverviewPage from "./components/OverviewPage.vue";
import LifePage from "./components/LifePage.vue";
import CommsPage from "./components/CommsPage.vue";
import PropPage from "./components/PropPage.vue";
import MechPage from "./components/MechPage.vue";
import PowerPage from "./components/PowerPage.vue";
import AvionicsPage from "./components/AvionicsPage.vue";
import ThermalPage from "./components/ThermalPage.vue";

const routes = [
  { path: "/overview", component: OverviewPage },
  { path: "/life", component: LifePage },
  { path: "/comms", component: CommsPage },
  { path: "/prop", component: PropPage },
  { path: "/mech", component: MechPage },
  { path: "/power", component: PowerPage },
  { path: "/avionics", component: AvionicsPage },
  { path: "/thermal", component: ThermalPage },
  { path: "/", redirect: "/overview" }, 
  { path: "/:pathMatch(.*)*", redirect: "/overview" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
