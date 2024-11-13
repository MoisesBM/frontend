<template>
    <!-- Enlace a Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <div class="container">
      <h1>PERFIL</h1>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Datos del Usuario</h5>
          <p class="card-text"><strong>Nombre:</strong> {{ usuario.name }}</p>
          <p class="card-text"><strong>Correo:</strong> {{ usuario.email }}</p>
          <button @click="configurarPerfil" class="btn btn-primary">
            <i class="fas fa-cog"></i> Cambiar Contraseña
          </button>
          <button @click="cerrarSesion" class="btn btn-danger">
            <i class="fas fa-sign-out-alt"></i> Cerrar Sesión
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const usuario = ref({
    name: '',
    email: ''
  });
  
  const obtenerDatosUsuario = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/user/profile');
      if (response.ok) {
        const data = await response.json();
        usuario.value = data;
      } else {
        console.error('Error al obtener los datos del usuario');
      }
    } catch (error) {
      console.error('Error en la conexión:', error);
    }
  };
  
  const configurarPerfil = () => {
    // Lógica para configurar el perfil
    console.log('Configuración del perfil');
  };
  
  const cerrarSesion = () => {
    // Lógica para cerrar sesión
    console.log('Cerrando sesión');
  };
  
  onMounted(() => {
    obtenerDatosUsuario();
  });
  </script>
  
  <style scoped>
  .container {
    padding: 20px;
  }
  
  .card {
    margin-top: 20px;
  }
  
  .card-title {
    font-size: 1.5rem;
  }
  
  .card-text {
    font-size: 1.2rem;
  }
  
  .btn {
    margin-right: 10px;
    margin-top: 10px;
  }
  </style>