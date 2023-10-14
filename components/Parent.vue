<template>
  <div id="parents">
    <div
      class="mx-auto max-w-2xl px-4 py-32 sm:px-6 sm:py-48 lg:max-w-7xl lg:grid-cols-2 lg:px-8 lg:py-56"
    >
      <div
        class="flex flex-wrap flex-wrap-reverse items-start justify-between gap-8"
      >
        <div class="mx-auto">
          <NuxtImg src="/img/compost2.jpeg" fit="contain" />
        </div>
        <div class="self-end ml-auto text-right">
          <p class="mt-6 text-lg leading-8 text-gray-600">Dove for Home</p>
          <h2
            class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            How to compost your Dove empties?
          </h2>
          <div class="mt-10">
            <UButton
              class="bg-primary-600 opacity-90"
              label="Learn More"
              size="lg"
            />
          </div>
        </div>
      </div>
      <div class="flex justify-center gap-x-6 mt-4">
        <UButton
          label="Gardening Tips"
          variant="outline"
          size="lg"
          class="text-primary-600"
        />
        <UButton
          label="Vegan Recipe"
          variant="outline"
          size="lg"
          class="text-primary-600"
        />
      </div>
    </div>
  </div>
</template>
