// src/composables/useAuth.js
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default function useAuth() {
  const username = ref('');
  const password = ref('');
  const token = ref('');
  const errorMessage = ref('');
  const tokenSent = ref(false);
  const router = useRouter();

  const login = async () => {
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username.value,
          password: password.value,
        }),
      });

      if (response.ok) {
        tokenSent.value = true;
        errorMessage.value = '';
      } else {
        errorMessage.value = 'Credenciales incorrectas';
      }
    } catch (error) {
      errorMessage.value = 'Error en la conexión';
    }
  };

  const verifyToken = async () => {
    try {
      const response = await fetch('http://localhost:3000/verify-token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username.value,
          token: token.value,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token);
        router.push('/home');
      } else {
        errorMessage.value = 'Token inválido';
      }
    } catch (error) {
      errorMessage.value = 'Error al validar el token';
    }
  };

  return {
    username,
    password,
    token,
    errorMessage,
    tokenSent,
    login,
    verifyToken,
  };
}