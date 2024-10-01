<template>
    <div class="login-container">
      <h2>Iniciar Sesión</h2>
      <form @submit.prevent="login">
        <div>
          <label>Usuario</label>
          <input v-model="username" type="text" required>
        </div>
        <div>
          <label>Contraseña</label>
          <input v-model="password" type="password" required>
        </div>
        <button type="submit">Entrar</button>
      </form>
      <p v-if="errorMessage">{{ errorMessage }}</p>

      <p>No tienes una cuenta? <router-link to="/register">Regístrate aquí</router-link></p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: '',
        errorMessage: '',
      };
    },
    methods: {
  async login() {
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        //SSS
        body: JSON.stringify({
          username: this.username,
          password: this.password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token);
        this.$router.push('/home'); 
      } else {
        this.errorMessage = 'Credenciales incorrectas';
      }
    } catch (error) {
      this.errorMessage = 'Error en la conexión';
    }
  },
}

  };
  </script>
  
  <style scoped>
  .login-container {
    max-width: 400px;
    margin: auto;
  }
  </style>
  