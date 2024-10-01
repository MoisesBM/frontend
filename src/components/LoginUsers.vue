<template>
  <div class="login-container">
    <h2>Iniciar Sesión</h2>
    <form @submit.prevent="login">
      <div>
        <label>Usuario</label>
        <input v-model="username" type="text" required />
      </div>
      <div>
        <label>Contraseña</label>
        <input v-model="password" type="password" required />
      </div>
      <button type="submit">Entrar</button>
    </form>

    <p v-if="errorMessage">{{ errorMessage }}</p>

    <div v-if="tokenSent">
      <h3>Token enviado a tu correo</h3>
      <p>Ingresa el token para validar tu sesión</p>
      <input v-model="token" type="text" placeholder="Token" />
      <button @click="verifyToken">Validar Token</button>
    </div>

    <p>No tienes una cuenta? <router-link to="/register">Regístrate aquí</router-link></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      token: '',
      errorMessage: '',
      tokenSent: false, // Indicador para mostrar la segunda fase del token
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
          body: JSON.stringify({
            username: this.username,
            password: this.password,
          }),
        });

        if (response.ok) {
          // Usuario autenticado correctamente
          this.tokenSent = true; // Cambiar a la fase de token
          this.errorMessage = '';
        } else {
          this.errorMessage = 'Credenciales incorrectas';
        }
      } catch (error) {
        this.errorMessage = 'Error en la conexión';
      }
    },

    async verifyToken() {
      try {
        const response = await fetch('http://localhost:3000/verify-token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: this.username,
            token: this.token, // Enviamos el token ingresado por el usuario
          }),
        });

        if (response.ok) {
          // Token validado
          const data = await response.json();
          localStorage.setItem('token', data.token);
          this.$router.push('/home'); // Redirigir al home/dashboard
        } else {
          this.errorMessage = 'Token inválido';
        }
      } catch (error) {
        this.errorMessage = 'Error al validar el token';
      }
    },
  },
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: auto;
}
</style>
