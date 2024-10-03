// src/routersdsd/indexd.js
import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '@/views/LoginView.vue';
import RegisterView from '@/views/RegisterView.vue';
import HomeInicial from '@/components/HomeInicial.vue';



const routes = [
    {
      path: '/',
      redirect: '/login' 
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'Register',
      component: RegisterView
    },
    {
      path: '/home',
      name: 'HomeInicial',
      component: HomeInicial,
      meta: { requiresAuth: true }
    }
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes
  });

  export default router;
  