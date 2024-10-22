<template>
  <div class="d-flex vh-100">
    <!-- Sidebar -->
    <nav
      id="sidebar"
      class="bg-primary d-flex flex-column justify-content-between"
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
    <div class="w-100 d-flex flex-column">
      <div class="topbar d-flex align-items-center justify-content-between p-3">
        <div>
          <h2 class="text-success">GstWeb</h2>
        </div>
        <div class="d-flex align-items-center">
          <div class="search-bar me-3">
            <input type="text" class="form-control" placeholder="Buscar" />
          </div>
          <div class="user-profile d-flex align-items-center">
            <!-- Reemplazar la imagen con un icono de persona -->
            <i class="bi bi-person-circle" style="font-size: 1.5rem;"></i>
            <span class="ms-2">{{ username }}</span>

            <button class="btn btn-link ms-3" @click="openSettings">
              <i class="bi bi-gear-fill"></i>
            </button>
            <button class="btn btn-danger ms-3" @click="logout">
              <i class="bi bi-box-arrow-left"></i> <!-- Icono diferente -->
            </button>
            
          </div>
        </div>
      </div>

      <!-- Contenido principal -->
      <div id="content" class="flex-grow-1">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const isSidebarExpanded = ref(false);
const router = useRouter();

const username = ref('');

onMounted(() => {
  username.value = localStorage.getItem('username');
});

//#BARRA LATERAL
const menuItems = ref([
  { name: 'Inicio', icon: 'bi bi-grid' },
  { name: 'Proyectos', icon: 'bi bi-app' },
  { name: 'Tareas', icon: 'bi bi-map' },
  { name: 'Perfil', icon: 'bi bi-person' },
]);

const showNames = () => {
  isSidebarExpanded.value = true;
};

const hideNames = () => {
  isSidebarExpanded.value = false;
};

//#CIERRE DE SESION
const logout = () => {
  localStorage.removeItem('username');
  localStorage.removeItem('token');
  localStorage.removeItem('userId');
  console.log('Sesión cerrada');
  router.push('/login');
};
</script>

<style scoped>
/* Sidebar */
#sidebar {
  width: 60px;
  min-height: 100vh; /* Asegura que el sidebar ocupe toda la altura */
  transition: width 0.4s ease;
  background-color: #007bff; /* Azul sólido para todo el sidebar */
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Distribuye el contenido superior e inferior */
}

#sidebar:hover {
  width: 200px;
}

.icon {
  font-size: 24px;
  min-width: 24px;
  text-align: center;
}

.logout-btn-container {
  margin-top: auto; /* Se asegura de que el botón de logout esté al final */
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
  padding: 20px;
}

/* Flexibilidad del diseño para que el sidebar y el contenido se adapten a la pantalla */
.d-flex.vh-100 {
  height: 100vh;
}

/* Media queries para pantallas más pequeñas */
@media (max-width: 768px) {
  #sidebar {
    width: 50px;
  }

  #sidebar:hover {
    width: 150px;
  }

  .icon {
    font-size: 20px;
  }

  .topbar {
    flex-direction: column;
    align-items: flex-start;
  }

  .user-profile {
    margin-top: 10px;
  }
}
</style>
