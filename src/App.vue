<template>
  <div id="app">
    <!-- Imagen ubicada en la esquina superior izquierda -->
    <img alt="logo" src="./assets/favicon.jpg" class="logo" />
    
    <!-- Contenedor de la aplicación -->
    <router-view />
  </div>
</template>

<style scoped>
.logo { 
  width: 100px;
  height: 100px;
  position: fixed;
  
}
</style>
