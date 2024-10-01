<template>
  <div class="register">
    <h2>Registro</h2>
    <form @submit.prevent="register">
      <input v-model="username" type="text" placeholder="Nombre de usuario" required />
      <input v-model="password" type="password" placeholder="Contraseña" required />
      <input v-model="confirmPassword" type="password" placeholder="Confirmar contraseña" required />
      <input v-model="email" type="email" placeholder="Correo electrónico" required />

      <button type="submit">Registrar</button>
    </form>

    <!-- Modal para mostrar éxito en el registro -->
    <div v-if="showModal" class="modal">
      <div class="modal-content">
        <h3>Registro exitoso</h3>
        <p>Tu cuenta ha sido registrada exitosamente.</p>
        <button @click="goToLogin">Volver al login</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      password: '',
      confirmPassword: '',
      email: '',
      showModal: false,
    };
  },
  methods: {
    async register() {
      // Validar si las contraseñas coinciden
      if (this.password !== this.confirmPassword) {
        alert('Las contraseñas no coinciden');
        return;
      }

      try {
        // Hacer la petición al backend para registrar el usuario
        const response = await axios.post('http://localhost:3000/register', {
          username: this.username,
          password: this.password,
          confirmPassword: this.confirmPassword, // Aunque no se guarda, se envía para validar en backend
          email: this.email,
        });

        // Si el registro fue exitoso, mostrar el modal
        if (response.status === 201) {
          this.showModal = true;
        }
      } catch (error) {
        console.error('Error al registrar:', error.response ? error.response.data : error);
        alert('Error al registrar el usuario: ' + (error.response ? error.response.data : error.message));
      }
    },
    goToLogin() {
      // Redirigir al login
      this.$router.push('/login');
    },
  },
};
</script>

<style scoped>
.register {
  display: flex;
  border-radius: 2rem;
  align-items: center;
  justify-content: center;
  max-width: 400px;
  margin: auto;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
}
</style>
