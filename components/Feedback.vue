<template>
  <UContainer>
    <div
      id="feedback"
      class="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56 scroll-mt-16"
    >
      <div class="mb-4 flex justify-center">
        <div
          class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
        >
          Thank you for watching
        </div>
      </div>
      <div class="text-center">
        <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Dove for the <span class="text-primary-600">Planet</span>
        </h1>
        <div class="mt-10 flex justify-center">
          <NuxtImg src="/img/PlanetDove.png" fit="contain" />
        </div>
      </div>
      <div class="max-w-sm mx-auto">
        <p class="mt-6 text-center text-md leading-6 text-gray-600">
          Please give us feedback to win gifts including travel body wash, vegan
          cook book, mini Dove toy etc.
        </p>
        <form @submit.prevent="handleSubmit">
          <div class="mt-8 space-y-8">
            <div class="max-w-sm mx-auto flex flex-col items-stretch">
              <h2 class="text-center font-semibold leading-7 text-gray-900">
                Your voice matters
              </h2>
              <div class="mt-6">
                <label
                  for="name"
                  class="block text-center text-sm font-medium leading-6 text-gray-900"
                  >Name</label
                >
                <div class="mt-2">
                  <div
                    class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary-500"
                  >
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autocomplete="name"
                      class="block text-center flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>

              <div class="mt-6">
                <label
                  for="email"
                  class="block text-center text-sm font-medium leading-6 text-gray-900"
                  >Email address</label
                >
                <div class="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autocomplete="email"
                    class="block text-center w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div class="mt-6">
                <label
                  for="postal-code"
                  class="block text-center text-sm font-medium leading-6 text-gray-900"
                  >ZIP / Postal code</label
                >
                <div class="mt-2">
                  <input
                    type="text"
                    name="postal-code"
                    id="postal-code"
                    autocomplete="postal-code"
                    class="block text-center w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div class="mt-6">
                <legend
                  class="text-center text-sm font-semibold leading-6 text-gray-900"
                >
                  How would you rate the new plant-based packaging?
                </legend>
                <ScoreInput class="mt-2 w-full" />
              </div>

              <div class="mt-6 space-y-10">
                <fieldset>
                  <legend
                    class="text-center text-sm font-semibold leading-6 text-gray-900"
                  >
                    Would you like to receive our product and marketing
                    information through email?
                  </legend>
                  <div class="mt-2 space-y-6 flex justify-center">
                    <div class="relative flex gap-x-3">
                      <div class="flex h-6 items-center">
                        <input
                          id="notification"
                          name="notification"
                          type="checkbox"
                          class="h-4 w-4 rounded border-gray-300 text-primary-600 opacity-90 focus:ring-primary-600"
                        />
                      </div>
                      <div class="text-sm leading-6">
                        <p class="text-gray-500">Yes, I'm in!</p>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </div>
              <div class="border-b border-gray-900/10 pb-12"></div>
            </div>

            <div class="mt-6 flex items-center justify-center gap-x-6">
              <div class="w-80">
                <UButton
                  type="submit"
                  label="Submit"
                  size="lg"
                  block
                  class="bg-primary-600 opacity-90"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </UContainer>
  <SubmitButton v-model:open="isOpen" />
</template>

<script setup>
import { ref } from "vue";

const isOpen = ref(false);

function handleSubmit() {
  isOpen.value = true;
}
</script>
