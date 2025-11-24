import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '../pages/HomePage.vue';
import UnitySafetyPage from '../pages/UnitySafetyPage.vue';
import DiscourseResearchPage from '../pages/DiscourseResearchPage.vue';
import LexiConcordiaPage from '../pages/LexiConcordiaPage.vue';
import AboutPage from '../pages/AboutPage.vue';

const routes = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/unity-safety', name: 'unity-safety', component: UnitySafetyPage },
  { path: '/discourse-research', name: 'discourse-research', component: DiscourseResearchPage },
  { path: '/lexiconcordia', name: 'lexiconcordia', component: LexiConcordiaPage },
  { path: '/about', name: 'about', component: AboutPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
