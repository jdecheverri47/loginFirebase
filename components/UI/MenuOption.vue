<template>
  <div class="flex flex-row justify-start items-center px-8 py-2 mx-3 hover:bg-emerald-300 custom-transition rounded-lg gap-2 pointer-events-auto cursor-pointer  tracking-tight hover:text-white text-emerald-400">
    <slot />
    <h2>{{ text }}</h2>
  </div>
</template>
<script setup>
  defineProps({
    text: String,
  });
</script>
<style>
  .custom-transition {
    transition-property: background-color;
    transition-duration: 100ms;
  }
</style>
