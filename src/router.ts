import { h, defineComponent } from 'vue';
import { createRouter, createWebHistory, RouteRecordRaw, RouterView } from 'vue-router';
import PassThrough from './PassThrough.vue'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: PassThrough,
    children: [
      {
        name: 'a',
        path: 'a/:id',
        redirect: { name: 'child-a' },
        props: true,
        component: () => import('./ARoute.vue'),
        children: [
          {
            name: 'child-a',
            path: 'child-a',
            props: route => ({ id: route.params.id }),
            component: { render: () => h('div', 'A content') },
          },
        ],
      },
      {
        name: 'b',
        path: 'b',
        component: { render: () => h('div', 'B content') },
      },
    ]
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
