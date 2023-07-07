<template>
  <div v-show="loader" class="loader-container">
    <span class="loader"></span>
  </div>
</template>

<script setup>

const loader = ref(true);

onMounted(async () => {
  await showLoaderForTwoSeconds();
});

async function showLoaderForTwoSeconds() {
  loader.value = true;

  // Simulamos una espera de 2 segundos utilizando un temporizador
  await new Promise(resolve => setTimeout(resolve, 2000));

  loader.value = false;
}

</script>
<style scoped>

.loader-container{
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
  animation: fadeOut 1.2s ease-in-out 1s forwards;
}
.loader {
  position: absolute;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: inline-block;
  border-top: 4px solid #022d40;
  border-right: 4px solid transparent;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}
.loader::after {
  content: '';
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border-bottom: 4px solid #6ee7b7;
  border-left: 4px solid transparent;
}
.loader-container.fade-out {
  opacity: 0;
}
@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

</style>