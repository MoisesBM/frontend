<template>
    <div class="welcome-container">
      <div class="header">
        <h1>Bienvenido a GstWeb</h1>
        <p>Tu gestor de proyectos eficiente y fácil de usar.</p>
      </div>
      <div class="content">
        <div class="intro">
          <h2>¿Qué es un Gestor de Proyectos?</h2>
          <p>
            Un gestor de proyectos es una herramienta que te ayuda a planificar, organizar y gestionar tus proyectos de manera eficiente. Con GstWeb, puedes crear proyectos, asignar tareas, colaborar con tu equipo y hacer un seguimiento del progreso de tus proyectos en tiempo real.
          </p>
          <button @click="irACrearProyecto">Crear Proyecto</button>
        </div>
        <div class="info-columns">
          <div class="column">
            <h3>Colaboración en Equipo</h3>
            <p>
              Facilita la colaboración entre los miembros de tu equipo, permitiéndoles trabajar juntos en tareas y proyectos, compartir archivos y comunicarse de manera efectiva.
            </p>
          </div>
          <div class="column">
            <h3>Seguimiento del Progreso</h3>
            <p>
              Mantén un registro del progreso de tus proyectos con herramientas de seguimiento y reportes detallados. Identifica cuellos de botella y asegúrate de que todo esté en marcha.
            </p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  
  const irACrearProyecto = () => {
    router.push('/home');
  };
  </script>
  
  <style scoped>
  .welcome-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
  }
  
  .header {
    margin-bottom: 40px;
  }
  
  .header h1 {
    font-size: 2.5rem;
    color: #2c3e50;
  }
  
  .header p {
    font-size: 1.2rem;
    color: #34495e;
  }
  
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .intro {
    margin-bottom: 40px;
  }
  
  .intro h2 {
    font-size: 2rem;
    color: #2980b9;
  }
  
  .intro p {
    font-size: 1rem;
    color: #7f8c8d;
    margin-bottom: 20px;
  }
  
  .intro button {
    padding: 10px 20px;
    font-size: 1rem;
    color: #fff;
    background-color: #2980b9;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .intro button:hover {
    background-color: #1a5276;
  }
  
  .info-columns {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  
  .column {
    width: 45%;
    padding: 20px;
    background-color: #ecf0f1;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .column h3 {
    font-size: 1.5rem;
    color: #2c3e50;
    margin-bottom: 10px;
  }
  
  .column p {
    font-size: 1rem;
    color: #7f8c8d;
  }
  </style>