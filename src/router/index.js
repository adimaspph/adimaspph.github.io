import { createRouter, createWebHistory } from "vue-router"
import ProjectBrives from "../pages/ProjectBrives.vue";
import Home from "../pages/Home.vue"

const routes = [
	{
		path: "/",
		component: Home,
	},
	{
		path: "/brives",
		component: ProjectBrives,
	},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router