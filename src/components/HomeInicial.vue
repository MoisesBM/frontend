<template>
  <div>
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
  name: 'HomeInicial',
  data() {
    return {
      username: 'Daniela',  // Esto puede venir dinámicamente de una API
      activeProjects: 5,  // Ejemplo, puede ser cargado desde una API
      pendingTasks: 12,  // Ejemplo estático
      projectProgress: 45,  // Progreso en porcentaje
      totalTimeWorked: 10,  // Tiempo total trabajado en horas
      projects: [
        { id: 1, name: 'Proyecto A', tasks: [{ id: 1 }, { id: 2 }] },
        { id: 2, name: 'Proyecto B', tasks: [{ id: 3 }] }
      ],  // Lista de proyectos
      assignedTasks: [
        { id: 1, name: 'Tarea 1', dueDate: '10/10/2024' },
        { id: 2, name: 'Tarea 2', dueDate: '12/10/2024' }
      ],  // Lista de tareas asignadas
    };
  },
  methods: {
    completeTask(taskId) {
      // Lógica para marcar una tarea como completada
      this.assignedTasks = this.assignedTasks.filter(task => task.id !== taskId);
      this.pendingTasks -= 1;
    },
    startTimer() {
      // Lógica para iniciar el temporizador
      console.log('Temporizador iniciado');
    },
    stopTimer() {
      // Lógica para detener el temporizador
      console.log('Temporizador detenido');
    }
  }
}
</script>
<style scoped>
.welcome-panel {
  margin-top: 20px;
  text-align: center;
}

.progress-summary {
  margin-top: 20px;
}

.progress-bar {
  width: 100%;
  background-color: #ddd;
  border-radius: 5px;
}

.progress {
  height: 20px;
  background-color: #007bff;
  border-radius: 5px;
}

.projects-overview, .tasks-overview, .time-tracking-overview {
  margin-top: 30px;
  width: 100%;
}

.projects-list {
  display: flex;
  gap: 20px;
}

.project-card {
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 250px;
}

.task-list {
  list-style: none;
  padding: 0;
}

.complete-task-button {
  background-color: green;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}

.time-chart {
  text-align: center;
}

</style>
