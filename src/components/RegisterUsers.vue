<template>
    <div class="register">
      <h2>Registro</h2>
      <form @submit.prevent="register">
        <input v-model="username" type="text" placeholder="Nombre de usuario" required />
        <input v-model="password" type="password" placeholder="Contraseña" required />
        <button type="submit">Registrar</button>
      </form>
  

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
        showModal: false,
      };
    },
    methods: {
      async register() {
        try {

          const response = await axios.post('http://localhost:3000/register', {
            username: this.username,
            password: this.password,
          });
  
          if (response.status === 201) {

            this.showModal = true;
          }
        } catch (error) {
          console.error('Error al registrar:', error.response ? error.response.data : error);
        }
      },
      goToLogin() {

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
  