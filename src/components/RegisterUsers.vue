<template>
  <div class="register">
    <h2>Registro</h2>
    <form @submit.prevent="register">
      <input v-model="username" type="text" placeholder="Nombre de usuario" required />
      <input v-model="password" type="password" placeholder="Contraseña" required />
      <input v-model="confirmPassword" type="password" placeholder="Confirmar contraseña" required />
      <input v-model="email" type="email" placeholder="Correo electrónico" required />
      
      <div>
        <input type="checkbox" v-model="acceptedTerms" id="terms" />
        <label for="terms">Acepto los términos y condiciones</label>
      </div>

      <button type="submit">Registrar</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      confirmPassword: '',
      email: '',
      acceptedTerms: false
    };
  },
  methods: {
    async register() {
      try {
        const response = await this.$axios.post('/api/register', {
          username: this.username,
          password: this.password,
          confirmPassword: this.confirmPassword,
          email: this.email,
          acceptedTerms: this.acceptedTerms
        });
        // Manejo de respuesta
        console.log(response.data);
      } catch (error) {
        console.error('Error en el registro:', error);
      }
    }
  }
};
</script>
