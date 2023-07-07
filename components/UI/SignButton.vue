<template>
    <button :type="type" class="w-full mt-2 py-2 px-1 bg-gray-100 rounded-full flex flex-row items-center justify-center gap-3 transition-all ease-in-out duration-300 hover:bg-gray-200 hover:transition-all hover:ease-in-out hover:duration-300">
    <img :src="image" class="w-[1.3rem] h-[1.3rem]" />
    {{ text }}
  </button>
</template>

<script setup>
  defineProps({
    type: {
      type: String,
      default: 'submit'
    },
    image: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
  });
</script>