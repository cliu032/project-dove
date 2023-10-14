<template>
  <div id="kids">
    <div
      class="flex flex-wrap mx-auto max-w-2xl items-start justify-between gap-x-8 gap-y-8 px-4 py-32 sm:px-6 sm:py-48 lg:max-w-7xl lg:grid-cols-2 lg:px-8 lg:py-56"
    >
      <div>
        <p class="mt-6 text-lg leading-8 text-gray-600">Dove for Kids</p>
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Do you know our planet - the Earth?
        </h2>
        <div class="mt-10 flex gap-x-6">
          <UButton class="bg-primary-600 opacity-90" label="Quiz Time" size="lg" />
          <UButton
            label="Drawing Tips &rarr;"
            variant="link"
            size="lg"
            class="text-primary-600"
          />
        </div>
      </div>
      <div class="mx-auto">
        <NuxtImg src="/img/compost.jpeg" fit="contain" />
      </div>
    </div>
  </div>
</template>
