<template>
    <div class="container">
      <h1>Gestionar Proyecto</h1>
      <div v-if="proyecto">
        <h2>{{ proyecto.name }}</h2>
        <p>{{ proyecto.description }}</p>
        <p><strong>Fecha:</strong> {{ proyecto.date }}</p>
  
        <h3>Tareas</h3>
        <table class="table table-dark table-striped table-hover">
          <thead>
            <tr>
              <th>Nombre de la Tarea</th>
              <th>Descripción</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody class="table-light text-dark">
            <tr v-for="(tarea, index) in tareas" :key="index">
              <td>{{ tarea.name }}</td>
              <td>{{ tarea.description }}</td>
              <td>{{ tarea.status }}</td>
            </tr>
          </tbody>
        </table>
  
        <h3>Usuarios Asignados</h3>
        <table class="table table-dark table-striped table-hover">
          <thead>
            <tr>
              <th>Nombre de Usuario</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody class="table-light text-dark">
            <tr v-for="(usuario, index) in usuarios" :key="index">
              <td>{{ usuario.name }}</td>
              <td>{{ usuario.email }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  
  const route = useRoute();
  const proyecto = ref(null);
  const tareas = ref([]);
  const usuarios = ref([]);
  
  const obtenerProyecto = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/projects/${route.params.id}`);
      if (response.ok) {
        proyecto.value = await response.json();
      } else {
        console.error('Error al obtener el proyecto');
      }
    } catch (error) {
      console.error('Error en la conexión:', error);
    }
  };
  
  const obtenerTareas = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/projects/${route.params.id}/tasks`);
      if (response.ok) {
        tareas.value = await response.json();
      } else {
        console.error('Error al obtener las tareas');
      }
    } catch (error) {
      console.error('Error en la conexión:', error);
    }
  };
  
  const obtenerUsuarios = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/projects/${route.params.id}/users`);
      if (response.ok) {
        usuarios.value = await response.json();
      } else {
        console.error('Error al obtener los usuarios');
      }
    } catch (error) {
      console.error('Error en la conexión:', error);
    }
  };
  
  onMounted(() => {
    obtenerProyecto();
    obtenerTareas();
    obtenerUsuarios();
  });
  </script>
  
  <style scoped>
  .container {
    padding: 20px;
  }
  
  h1, h2, h3 {
    color: #333;
  }
  
  .table {
    margin-top: 20px;
  }
  </style>