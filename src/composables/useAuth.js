// src/composables/useAuth.js
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default function useAuth() {
  const username = ref('');
  const password = ref('');
  const token = ref('');
  //prueba
  //userId = ref('');
  //------
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

        console.error(response.userId);
        console.log(response.userId);
        console.log(response.localStorage);

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
          //prueba
          //userId: userId.value,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data); //verificar los datos que esta almacenando - MOISESBM
          //prueba
        localStorage.setItem('token', data.token);
        localStorage.setItem('userId', response.userId);

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
    //prueba
    //userId,
    errorMessage,
    tokenSent,
    login,
    verifyToken,
  };
}