<template>
  <div class="container">
    <h1>INICIO</h1>

    <div class="row">
      <!-- Projects Section -->
      <div class="col-md-6">
        <h2>Proyectos</h2>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>Nombre del Proyecto</th>
              <th>Descripción</th>
              <th>Fecha</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(proyecto, index) in proyectos" :key="index">
              <td>{{ proyecto.nombre }}</td>
              <td>{{ proyecto.descripcion }}</td>
              <td>{{ proyecto.fecha }}</td>
              <td>
                <button @click="editarProyecto(proyecto.id)">Editar Proyecto</button>
                <button @click="gestionarProyecto(proyecto.id)">Gestionar Proyecto</button>
              </td>
            </tr>
          </tbody>
        </table>
        <button class="btn btn-primary" @click="abrirFormulario">Añadir Proyecto</button>
      </div>

      <div class="col-md-6">
        <h2>Tareas</h2>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>Nombre de la Tarea</th>
              <th>Estado</th>
              <th>Fecha</th>
              <th>Proyecto</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(tarea, index) in tareas" :key="index">
              <td>{{ tarea.nombre }}</td>
              <td>{{ tarea.estado }}</td>
              <td>{{ tarea.fecha }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div v-if="mostrarFormulario" class="modal">
  <div class="form-container">
    <h3>Añadir Proyecto</h3>
    <form @submit.prevent="guardarProyecto">
      <div class="form-group">
        <label for="nombre">Nombre del Proyecto:</label>
        <input type="text" v-model="nuevoProyecto.nombre" required />
      </div>
      <div class="form-group">
        <label for="descripcion">Descripción:</label>
        <input type="text" v-model="nuevoProyecto.descripcion" required />
      </div>
      <div class="form-group">
        <label for="fecha">Fecha:</label>
        <input type="date" v-model="nuevoProyecto.fecha" required />
      </div>
      <div class="form-actions">
        <button type="submit" class="btn-save">Guardar</button>
        <button type="button" class="btn-cancel" @click="cerrarFormulario">Cancelar</button>
      </div>
    </form>
  </div>
</div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios'; // Importa axios

const proyectos = ref([]);
const nuevoProyecto = ref({
  nombre: '',
  descripcion: '',
  fecha: ''
});

// // Función para cargar los proyectos del usuario
// const cargarProyectos = async () => {
//   try {
//     const username = localStorage.getItem('username'); // Obtenemos el username desde localStorage
//     const response = await axios.get(`http://localhost:3000/api/proyectos/${username}`);
//     proyectos.value = response.data; // Actualizamos la lista de proyectos
//   } catch (error) {
//     console.error('Error al cargar proyectos:', error);
//   }
// };

// // Llamamos a la función al montar el componente
// onMounted(() => {
//   cargarProyectos();
// });

// Función para guardar un proyecto nuevo
const guardarProyecto = async () => {
  try {
    const username = localStorage.getItem('username'); // Obtenemos el username desde localStorage
    const response = await axios.post('http://localhost:3000/api/proyectos', { ...nuevoProyecto.value, username });
    proyectos.value.push(response.data); // Actualizamos la lista de proyectos
    cerrarFormulario(); // Cerramos el formulario
  } catch (error) {
    console.error('Error al guardar proyecto:', error);
  }
};

// Otras funciones de gestión del formulario
const mostrarFormulario = ref(false);
const abrirFormulario = () => { mostrarFormulario.value = true; };
const cerrarFormulario = () => { mostrarFormulario.value = false; };

</script>


<style scoped>
.modal {
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

form {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-container {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  width: 400px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h3 {
  text-align: center;
  color: #333;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  color: #555;
}

input[type="text"],
input[type="date"] {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-sizing: border-box;
  transition: border-color 0.3s ease;
}

input[type="text"]:focus,
input[type="date"]:focus {
  border-color: #007bff;
  outline: none;
}

.form-actions {
  display: flex;
  justify-content: space-between;
}

.btn-save {
  background-color: #28a745;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn-cancel {
  background-color: #dc3545;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  opacity: 0.9;
}
</style>
