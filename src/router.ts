import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    name: 'a',
    path: '/a/:id',
    redirect: { name: 'child-a' },
    props: true,
    component: () => import('./ARoute.vue'),
    children: [
      {
        name: 'child-a',
        path: 'child-a',
        props: route => ({ id: route.params.id }),
        component: {},
      },
    ],
  },
  {
    name: 'b',
    path: '/b',
    component: {},
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
