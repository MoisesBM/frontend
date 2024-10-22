<template>
  <div class="register">
            <!-- Imagen del logo -->
            <img :src="logo" alt="Logo" class="logo" />
    <h2>Registro</h2>
    <form @submit.prevent="register">
      <input v-model="username" type="text" placeholder="Nombre de usuario" required />
      <input v-model="password" type="password" placeholder="Contraseña" required />
      <input v-model="confirmPassword" type="password" placeholder="Confirmar contraseña" required />
      <input v-model="email" type="email" placeholder="Correo electrónico" required />
      
      <div class="checkbox-container">
        <input v-model="acceptTerms" type="checkbox" id="acceptTerms" />
        <label for="acceptTerms">Acepto los términos y condiciones</label>
        <small>Debe aceptar los términos y condiciones para registrarse.</small>
      </div>

      <div class="button-container">
        <button type="submit" :disabled="!acceptTerms">Registrar</button>
        <button type="button" @click="goToLogin">Volver</button>
      </div>
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

<script setup>
import useRegister from '@/composables/useRegister.js';
import logo from '@/assets/logo.png'; // Asegúrate de que la ruta sea correcta
import { ref } from 'vue';

const { username, password, confirmPassword, email, showModal, register, goToLogin} = useRegister();
const acceptTerms = ref(false);

console.log('Valor de acceptTerms:', acceptTerms.value);

</script>

<style scoped>
.logo {
  width: 100px; /* Ajusta el tamaño según sea necesario */
  margin-bottom: 20px;
}
.register {
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

.checkbox-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 10px 0;
}

.checkbox-container input {
  margin-right: 10px;
}

.checkbox-container small {
  margin-top: 5px;
  color: #6c757d;
  font-size: 0.875rem;
}

.button-container {
  display: flex;
  justify-content: space-between; 
  margin-top: 20px; 
}

button[type="submit"],
.button-container button {
  width: 48%; 
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

button[type="submit"]:hover,
.button-container button:hover {
  background-color: #1d3557; 
  transform: scale(1.02); 
}

button[type="submit"]:active,
.button-container button:active {
  transform: scale(0.98);
}

button[type="submit"]:disabled {
  background-color: #a8dadc;
  cursor: not-allowed;
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

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  width: 80%;
  max-width: 400px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.modal-content h3 {
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #1d3557;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.modal-content p {
  font-size: 1rem;
  color: #457b9d;
}

@media (max-width: 600px) {
  .register {
    padding: 20px;
    margin: 20px auto;
  }

  input,
  button[type="submit"] {
    font-size: 0.9rem;
    padding: 8px;
  }
}
</style>