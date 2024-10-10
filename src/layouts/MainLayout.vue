<template>
  <div>
    <header>
      <div class="main-layout">
        <nav class="navbar">
          <a class="nav-button" href="/">Inicio</a>
          <a class="nav-button" href="/projects">Mis Proyectos</a>
          <a class="nav-button" href="/support">Soporte</a>
        </nav>
      </div>
    </header>

    <!-- Panel de Bienvenida y Resumen -->
    <div class="welcome-panel">
      <h1>¡Bienvenido, {{ username }}!</h1>
      <p>Tienes {{ activeProjects }} proyectos activos y {{ pendingTasks }} tareas pendientes.</p>
      <div class="progress-summary">
        <h2>Resumen de Progreso</h2>
        <div class="progress-bar">
          <div class="progress" :style="{ width: projectProgress + '%' }"></div>
        </div>
        <p>{{ projectProgress }}% completado en proyectos activos.</p>
      </div>
    </div>
    
    <!-- Vista de Proyectos en Progreso -->
    <div class="projects-overview">
      <h2>Proyectos en Progreso</h2>
      <div class="projects-list">
        <div v-for="project in projects" :key="project.id" class="project-card">
          <h3>{{ project.name }}</h3>
          <p>{{ project.tasks.length }} tareas pendientes</p>
          <a href="#" class="view-project-button">Ver Proyecto</a>
        </div>
      </div>
    </div>

    <!-- Tareas Asignadas -->
    <div class="tasks-overview">
      <h2>Tareas Asignadas</h2>
      <ul class="task-list">
        <li v-for="task in assignedTasks" :key="task.id">
          {{ task.name }} - <span class="due-date">{{ task.dueDate }}</span>
          <button @click="completeTask(task.id)" class="complete-task-button">Completar</button>
        </li>
      </ul>
    </div>

    <!-- Seguimiento del Tiempo -->
    <div class="time-tracking-overview">
      <h2>Seguimiento del Tiempo</h2>
      <div class="time-chart">
        <p>Tiempo trabajado esta semana: {{ totalTimeWorked }} horas</p>
        <button @click="startTimer">Iniciar Temporizador</button>
        <button @click="stopTimer">Detener Temporizador</button>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'MainLayout'
}
</script>

<style scoped>
.main-layout {
  display: flex;
  justify-content: center;
  align-items: flex-start; /* Para alinear en la parte superior */
  padding-top: 20px; /* Espacio desde la parte superior */
  background-color: #f4f4f9;
  height: 100vh;
}

.navbar {
  display: flex;
  gap: 20px;
  padding: 20px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.nav-button {
  padding: 12px 24px;
  font-size: 16px;
  text-decoration: none;
  border-radius: 8px;
  background-color: #007bff;
  color: white;
  transition: background-color 0.3s ease;
  cursor: pointer;
}

.nav-button:hover {
  background-color: #0056b3;
}

.nav-button:active {
  background-color: #004085;
}
</style>
