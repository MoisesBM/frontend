<template>
  <div class="login-container">
    <h2>Iniciar Sesión</h2>
    <form @submit.prevent="login">
      <div>
        <label>Usuario</label>
        <input v-model="username" type="text" required placeholder="Nombre de usuario" />
      </div>
      <div>
        <label>Contraseña</label>
        <input v-model="password" type="password" required placeholder="Contraseña" />
      </div>
      <button type="submit">Entrar</button>
    </form>

    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>

    <div v-if="tokenSent" class="token-container">
      <h3>Token enviado a tu correo</h3>
      <p>Ingresa el token para validar tu sesión</p>
      <input v-model="token" type="text" placeholder="Token" />
      <button @click="verifyToken">Validar Token</button>
    </div>

    <p class="register-link">No tienes una cuenta? <router-link to="/register">Regístrate aquí</router-link></p>
  </div>
</template>

<script setup>

import useAuth from '@/composables/useAuth.js';

const { username, password, token, errorMessage, tokenSent, login, verifyToken } = useAuth();
</script>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 400px;
  margin: 100px auto;
  padding: 30px;
  background-color: #f4f4f4;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

h2 {
  font-size: 2rem;
  color: #1d3557;
  margin-bottom: 20px;
  text-align: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  letter-spacing: 1px;
}

form {
  width: 100%;
}

input {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #a8dadc;
  border-radius: 5px;
  font-size: 1rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  box-sizing: border-box;
  transition: border-color 0.3s ease;
}

input:focus {
  outline: none;
  border-color: #457b9d;
}

button[type="submit"] {
  width: 100%;
  padding: 12px;
  background-color: #457b9d;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

button[type="submit"]:hover {
  background-color: #1d3557;
  transform: scale(1.02);
}

button[type="submit"]:active {
  transform: scale(0.98);
}

.token-container {
  margin-top: 20px;
}

.token-container input {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #a8dadc;
  border-radius: 5px;
}

.token-container button {
  width: 100%;
  padding: 12px;
  background-color: #457b9d;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.token-container button:hover {
  background-color: #1d3557;
}


.error {
  color: red;
  font-weight: bold;
  margin-top: 10px;
  text-align: center;
}


.register-link {
  margin-top: 20px;
  text-align: center;
  font-size: 1rem;
  color: #457b9d;
}

.register-link a {
  color: #1d3557;
  text-decoration: underline;
}
.register-link a:hover {
  color: #457b9d;
}

@media (max-width: 600px) {
  .login-container {
    padding: 20px;
    margin: 20px auto;
  }

  input, button {
    font-size: 0.9rem;
    padding: 8px;
  }
}
</style>