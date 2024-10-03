// src/composables/useRegister.js
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

export default function useRegister() {
  const username = ref('');
  const password = ref('');
  const confirmPassword = ref('');
  const email = ref('');
  const showModal = ref(false);
  const errorMessage = ref('');
  const router = useRouter();

  const register = async () => {
    if (password.value !== confirmPassword.value) {
      alert('Las contraseñas no coinciden');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/register', {
        username: username.value,
        password: password.value,
        confirmPassword: confirmPassword.value,
        email: email.value,
      });

      if (response.status === 201) {
        showModal.value = true;
      }
    } catch (error) {
      console.error('Error al registrar:', error.response ? error.response.data : error);
      alert('Error al registrar el usuario: ' + (error.response ? error.response.data : error.message));
    }
  };

  const goToLogin = () => {
    router.push('/login');
  };

  return {
    username,
    password,
    confirmPassword,
    email,
    showModal,
    errorMessage,
    register,
    goToLogin,
  };
}