import { createRouter, createWebHistory, } from "vue-router"
import ProjectBrives from "../pages/ProjectBrives.vue";
import Home from "../pages/Home.vue"

const routes = [
	{
		path: "/",
		name: "home",
		component: Home,
	},
	{
		path: "/brives",
		name: "brives",
		component: ProjectBrives,
	},
	{
		path: "/:catchAll(.*)*",
		name: "PageNotFound",
		component: Home,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
	scrollBehavior(to, from, savedPosition) {
		if (to.hash) {
			return {
				el: to.hash,
				behavior: "smooth",
				top: 80,
			};
		}
		// always scroll to top
		return { top: 0 };
	},
});

export default router