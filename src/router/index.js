// src/routersdsd/indexd.js
import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '@/views/LoginView.vue';
import RegisterView from '@/views/RegisterView.vue';
import HomeView from '@/views/HomeView.vue';
import GestionarView from '@/views/GestionarView.vue';
import WelcomeView from '@/views/WelcomeView.vue';



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
    //#CREACION, ELIMINACION, AÑADIR, EDITAR PROYECTOS
    {
      path: '/home',
      name: 'HomeInicial',
      component: HomeView,
      //meta: { requiresAuth: true }
    },
    {
      path: '/proyectos/:id',
      name: 'GestionarProyecto',
      component: GestionarView
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: WelcomeView
    }
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes
  });

  export default router;
  