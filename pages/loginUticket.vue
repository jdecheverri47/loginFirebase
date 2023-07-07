<template>
  <section class="grid grid-cols-2 h-screen">

    <div class="background-style">
      <div class="bg-neutral-950 w-full h-full bg-opacity-10">
        <div class="w-full h-full flex flex-col justify-center items-center">
          <div class="w-[30rem] h-[30rem] rounded-full bg-white bg-opacity-80 shadow-xl">
            <img src="/assets/img/logo.png" class="mx-auto mt-[4rem]" />
          </div>
        </div>

      </div>
    </div>
    <div class="flex flex-col justify-center items-center w-full h-full">
      <div class="flex flex-col justify-start">
        <div class="flex flex-row justify-center items-center gap-12 mb-5">
          <img src="/assets/img/logo-ie-header.png" alt="ie logo" class="w-[50px] h-[50px]" />
          <img src="/assets/img/logo.png" alt="ie logo" class="w-fit h-fit max-w-[40px] max-h-[60px]"  />
        </div>
        
        <h1 class="text-bold text-5xl leading-2 tracking-wide">
          Welcome to 
          <strong class="text-emerald-300">Utraffic</strong>
          <br />
          Sign In to Continue.
        </h1>
      </div>

      <div class="mt-6">
        <p>Don't have an account? <a href="" class="underline underline-offset-2 font-semibold">Create a account</a></p>
        <p>It takes less than a minute.</p>
      </div>

      <div class="mt-6">
        <form>
          <div class="flex flex-col justify-center align-start">
            <label for="email">Email</label>
            <input
              class="w-[20rem] border px-2 py-1 m-1 focus:outline focus:outline-emerald-400 focus:rounded focus:outline-2"
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
            />

            <label for="password" class="mt-5">Password</label>
            <input
              class="w-[20rem] border px-2 py-1 m-1 focus:outline focus:outline-emerald-400 focus:rounded focus:outline-2"
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
            />

            <button type="submit" class="w-full mt-8 py-2 px-1 bg-emerald-300 rounded-full transition-all duration-300 ease-in-out hover:bg-emerald-400 hover:transition-all hover:ease-in-out hover:duration-300">Sign In</button>

            <button type="submit" class="w-full mt-4 py-2 px-1 bg-gray-100 rounded-full flex flex-row items-center justify-center gap-3 transition-all ease-in-out duration-300 hover:bg-gray-200 hover:transition-all hover:ease-in-out hover:duration-300"><img src="/assets/img/buscar.png" class="w-[1.3rem] h-[1.3rem]" />Sign In with Google</button>

          </div>
        </form>
      </div>
    </div>

  </section>

</template>

<script setup>

definePageMeta({
  layout: 'login'
});
</script>

<style scoped>

.background-style {
  background-image: url('/assets/img/u-ticket-background.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>