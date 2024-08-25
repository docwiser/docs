import { createRouter, createWebHistory } from 'vue-router';
import generateRoutes from './generateRoutes';
const routes = generateRoutes();
const router = createRouter({
history: createWebHistory(import.meta.env.BASE_URL),
routes: routes.concat([
{
path: '/:pathMatch(.*)*',
name: 'Catch-all route',
component: () => import('../components/catch.vue')
}
])
});
export default router;
