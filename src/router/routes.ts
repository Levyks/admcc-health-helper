import { RouteRecordRaw } from 'vue-router';

export const routesNames = {
  CURRENT_SESSION: 'current-session',
  MEDICINES: 'medicines',
};

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/HomePage.vue'),
        children: [
          {
            path: 'current-session',
            component: () => import('components/home/CurrentSessionTab.vue'),
            name: routesNames.CURRENT_SESSION,
          },
          {
            path: 'medicines',
            component: () => import('components/home/MedicinesTab.vue'),
            name: routesNames.MEDICINES,
          },
        ],
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
