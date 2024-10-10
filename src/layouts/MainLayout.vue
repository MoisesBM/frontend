<template>
  <div>
    <header>
      <div class="main-layout">
        <nav class="navbar">
          <a class="nav-button" href="/">Inicio</a>
          <a class="nav-button" href="/projects">Mis Proyectos</a>
          <a class="nav-button" href="/support">Soporte</a>
        </nav>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'MainLayout'
}
</script>

<style scoped>
.main-layout {
  display: flex;
  justify-content: center;
  align-items: flex-start; /* Para alinear en la parte superior */
  padding-top: 20px; /* Espacio desde la parte superior */
  background-color: #f4f4f9;
  height: 100vh;
}

.navbar {
  display: flex;
  gap: 20px;
  padding: 20px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.nav-button {
  padding: 12px 24px;
  font-size: 16px;
  text-decoration: none;
  border-radius: 8px;
  background-color: #007bff;
  color: white;
  transition: background-color 0.3s ease;
  cursor: pointer;
}

.nav-button:hover {
  background-color: #0056b3;
}

.nav-button:active {
  background-color: #004085;
}
</style>
