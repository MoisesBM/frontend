<template>
  <div class="d-flex">
    <!-- Sidebar -->
    <nav
      id="sidebar"
      class="bg-primary vh-100 d-flex flex-column justify-content-between"
      @mouseover="showNames"
      @mouseleave="hideNames"
    >
      <div>
        <!-- Logo -->
        <div class="d-flex align-items-center justify-content-center py-4">
          <i class="bi bi-app-indicator text-white fs-2"></i>
        </div>

        <!-- Menú -->
        <ul class="nav flex-column mt-4">
          <li class="nav-item" v-for="item in menuItems" :key="item.name">
            <a
              class="nav-link d-flex align-items-center justify-content-start text-white"
              href="#"
            >
              <span class="icon pe-3">
                <i :class="item.icon"></i>
              </span>
              <span class="label transition-text" :class="{'collapsed': !isSidebarExpanded}">
                {{ item.name }}
              </span>
            </a>
          </li>
        </ul>
      </div>

      <!-- Botón de Salir -->
      <div class="text-center mb-4">
        <button class="btn btn-danger w-100 d-flex align-items-center justify-content-center" @click="logout">
          <i class="bi bi-box-arrow-right"></i>
          <span class="ms-2 transition-text" :class="{'collapsed': !isSidebarExpanded}">
            Salir
          </span>
        </button>
      </div>
    </nav>

    <!-- Barra -->
    <div class="w-100">
      <div class="topbar d-flex align-items-center justify-content-between p-3">
        <div>
          <h2 class="text-success">GstWeb</h2>
        </div>
        <div class="d-flex align-items-center">
          <div class="search-bar me-3">
            <input type="text" class="form-control" placeholder="Search" />
          </div>
          <div class="user-profile d-flex align-items-center">
            <img
              src="https://via.placeholder.com/40"
              alt="User profile"
              class="rounded-circle"
            />
            <span class="ms-2">Moises Buitrago</span>
          </div>
        </div>
      </div>

      <!-- Contenido principal -->
      <div id="content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const isSidebarExpanded = ref(false);
const router = useRouter();

const menuItems = ref([
  { name: 'Inicio', icon: 'bi bi-grid' },
  { name: 'Proyectos', icon: 'bi bi-app' },
  { name: 'Tareas', icon: 'bi bi-map' },
  { name: 'Perfil', icon: 'bi bi-person' },
  { name: ' ...', icon: 'bi bi-table' },
  { name: '...', icon: 'bi bi-box-arrow-in-right' },
  { name: '...', icon: 'bi bi-person-plus' },
]);

const showNames = () => {
  isSidebarExpanded.value = true;
};

const hideNames = () => {
  isSidebarExpanded.value = false;
};

const logout = () => {
  console.log('Sesión cerrada');
  router.push('/login');
};
</script>

<style scoped>
/* Sidebar */
#sidebar {
  width: 60px;
  transition: width 0.4s ease;
}

#sidebar:hover {
  width: 200px;
}

.icon {
  font-size: 24px;
  min-width: 24px;
  text-align: center;
}

.nav-link {
  padding: 10px 20px;
  display: flex;
  align-items: center;
}

.transition-text {
  opacity: 1;
  visibility: visible;
  transition: opacity 0.3s ease, visibility 0.3s ease;
}

.transition-text.collapsed {
  opacity: 0;
  visibility: hidden;
}

/* Topbar */
.topbar {
  background-color: #f8f9fa;
  border-bottom: 1px solid #ddd;
}

.search-bar input {
  border-radius: 20px;
  border: 1px solid #ddd;
  padding: 5px 15px;
}

.user-profile img {
  width: 40px;
  height: 40px;
}

#content {
  background-color: #f8f9fa;
}

.button-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}
</style>
