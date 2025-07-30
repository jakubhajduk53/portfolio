import { createWebHistory, createRouter } from "vue-router";

import AboutView from "../views/AboutView.vue";
import ContactView from "../views/ContactView.vue";
import ProjectsView from "../views/ProjectsView.vue";

const routes = [
  { path: "/", name: "about", component: AboutView },
  { path: "/projects", name: "projects", component: ProjectsView },
  { path: "/contact", name: "contact", component: ContactView },
];

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
