<template>
    <MainLayout>
      <GestionarProyecto :projectId="projectId" />
    </MainLayout>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRoute } from 'vue-router';
  import GestionarProyecto from '@/components/GestionarProyecto.vue';
  import MainLayout from '@/layouts/MainLayout.vue';
  
  const route = useRoute();
  const projectId = ref(route.params.id);
  </script>