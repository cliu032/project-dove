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
            <UButton label="Learn More" size="lg" />
          </div>
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
