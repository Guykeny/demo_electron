import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../vue/Home.vue';

const routes = [
    { path: '/', name: 'home', component: Home },
];

const router = createRouter({
    history: createWebHashHistory(), // important pour Electron (pas d'historique HTML5)
    routes
});

export default router;