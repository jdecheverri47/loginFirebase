<template>
  <UILoader />
  <section class="grid grid-cols-12 h-screen">
    <div class="col-span-5 flex flex-col justify-center items-center w-full h-full">
      <div class="flex flex-col justify-start">
        <div class="flex flex-row justify-center items-center gap-12 mb-5">
          <img src="/assets/img/logo-ie-header.png" alt="ie logo" class="w-[50px] h-[50px]" />
          <img src="/assets/img/logo.png" alt="ie logo" class="w-fit h-fit max-w-[40px] max-h-[60px]"  />
        </div>

        <h1 class="text-bold text-left text-4xl leading-2 tracking-wide font-semibold">
          Create account
        </h1>
      </div>

      <div class="mt-2">

          <div class="flex flex-col justify-center align-start w-[20rem]">
            <div class="flex flex-col gap-2">
              <UISignButton type="submit" image="/assets/img/google.png" text="Sing Up with Google"/>
              <UISignButton type="submit" image="/assets/img/apple.png" text="Sing Up with Apple" />
            </div>

            <h1 class="w-full flex justify-center items-center text-sm custom-title after:ml-2 before:mr-2 mt-5 uppercase">or</h1>
              <UIRegisterForm />
          </div>
        <p class="text-center mt-3">Already have an account? <strong class="underline"><a href="/login" class="cursor-pointer pointer-events-auto">Log in</a></strong></p>
      </div>
    </div>

    <div class="background-style col-span-7">
      <div class="bg-neutral-950 w-full h-full bg-opacity-10">
        <div class="w-full h-full flex flex-col justify-center items-center">
          <div class="w-[30rem] h-[30rem] rounded-full bg-white bg-opacity-90 shadow-2xl">
            <img src="/assets/img/logo.png" class="mx-auto mt-[4rem]" />
          </div>
        </div>
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
  background-image: url('/assets/img/backgroundlogin.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.font-founders {
  font-family: 'Founders Grotesk';
}

.custom-title::before,
.custom-title::after {
  content: '';
  position: relative;
  width: 50%;
  height: 1px;
  background-color: rgba(116, 116, 116, 0.491);
}

</style>