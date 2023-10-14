<template>
  <UContainer>
    <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
      <div class="mb-4 flex justify-center">
        <div
          class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
        >
          Thank you for watching
        </div>
      </div>
      <div id="feedback" class="text-center scroll-mt-16">
        <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Dove for the Planet
        </h1>
        <p class="mt-6 text-md leading-8 text-gray-600">
          {{
            `Please give us feedback to win gifts:\n(Complimentary travel body wash, vegan cook book, mini dove toy etc.)`
          }}
        </p>
        <div class="mt-10 flex justify-center">
          <NuxtImg
            src="/img/gift.jpg"
            fit="contain"
            style="max-width: 60vw; max-height: 60vh"
          />
        </div>
      </div>
    </div>
    <form>
      <div class="space-y-8">
        <div>
          <h2 class="text-base font-semibold leading-7 text-gray-900">
            Feedback
          </h2>
          <p class="mt-1 text-sm leading-6 text-gray-600">Your voice matters</p>

          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-4">
              <label
                for="name"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Name</label
              >
              <div class="mt-2">
                <div
                  class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md"
                >
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autocomplete="name"
                    class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="John Doe"
                  />
                </div>
              </div>
            </div>
            <div class="sm:col-span-4">
              <label
                for="email"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Email address</label
              >
              <div class="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="border-b border-gray-900/10 pb-12">
          <legend class="mt-10 text-sm font-semibold leading-6 text-gray-900">
            How would you rate the new plant-based packaging?
          </legend>
          <div class="mt-2 space-y-10">
            <ScoreInput />

            <fieldset>
              <legend class="text-sm font-semibold leading-6 text-gray-900">
                Would you like to receive our product and marketing information
                through email?
              </legend>
              <div class="mt-2 space-y-6">
                <div class="relative flex gap-x-3">
                  <div class="flex h-6 items-center">
                    <input
                      id="notification"
                      name="notification"
                      type="checkbox"
                      class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div class="text-sm leading-6">
                    <!-- <label for="notification" class="font-medium text-gray-900"
                      >I'm in!</label
                    > -->
                    <p class="text-gray-500">Yes, I'm in!</p>
                  </div>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
      </div>

      <div class="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          class="text-sm font-semibold leading-6 text-gray-900"
        >
          Cancel
        </button>
        <button
          type="submit"
          class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  </UContainer>
</template>
