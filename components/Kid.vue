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
          <UButton label="Quiz Time" size="lg" />
          <UButton label="Drawing Tips &rarr;" variant="link" size="lg" />
        </div>
      </div>
      <div class="mx-auto">
        <NuxtImg src="/img/compost.jpeg" fit="contain" />
      </div>
      <!-- <div class="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
        <img
          src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
          alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
          class="rounded-lg bg-gray-100"
        />
        <img
          src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg"
          alt="Top down view of walnut card tray with embedded magnets and card groove."
          class="rounded-lg bg-gray-100"
        />
        <img
          src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg"
          alt="Side of walnut card tray with card groove and recessed card area."
          class="rounded-lg bg-gray-100"
        />
        <img
          src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg"
          alt="Walnut card tray filled with cards and card angled in dedicated groove."
          class="rounded-lg bg-gray-100"
        />
      </div> -->
    </div>
  </div>
</template>
