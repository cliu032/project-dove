<template>
  <div class="bg-white">
    <div class="relative isolate px-6 pt-14 lg:px-8">
      <div
        class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style="
            clip-path: polygon(
              74.1% 44.1%,
              100% 61.6%,
              97.5% 26.9%,
              85.5% 0.1%,
              80.7% 2%,
              72.5% 32.5%,
              60.2% 62.4%,
              52.4% 68.1%,
              47.5% 58.3%,
              45.2% 34.5%,
              27.5% 76.7%,
              0.1% 64.9%,
              17.9% 100%,
              27.6% 76.8%,
              76.1% 97.7%,
              74.1% 44.1%
            );
          "
        />
      </div>
      <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div class="mb-20 flex justify-center">
          <div
            class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
          >
            Announcing our next initiative.
            <a href="#hero" class="font-semibold text-indigo-600">
              <span class="absolute inset-0" aria-hidden="true" />
              Read more
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
        <div id="hero" class="text-center scroll-mt-16">
          <h1
            class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
          >
            Dove for the Planet
          </h1>
          <p class="mt-6 text-lg leading-8 text-gray-600">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
          <div class="mt-10 flex justify-center">
            <NuxtImg
              src="/img/earth.png"
              fit="contain"
              style="max-width: 60vw; max-height: 60vh"
            />
          </div>
          <div class="mt-12">
            <UTabs v-model="selected" :items="items" :ui="preset" />
          </div>
        </div>
      </div>
      <div
        class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style="
            clip-path: polygon(
              74.1% 44.1%,
              100% 61.6%,
              97.5% 26.9%,
              85.5% 0.1%,
              80.7% 2%,
              72.5% 32.5%,
              60.2% 62.4%,
              52.4% 68.1%,
              47.5% 58.3%,
              45.2% 34.5%,
              27.5% 76.7%,
              0.1% 64.9%,
              17.9% 100%,
              27.6% 76.8%,
              76.1% 97.7%,
              74.1% 44.1%
            );
          "
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const items = [
  {
    id: "kids",
    label: "For Kids",
  },
  {
    id: "parents",
    label: "For Parents",
  },
];

const preset = {
  wrapper: "relative space-y-2",
  container: "relative w-full",
  base: "focus:outline-none",
  list: {
    base: "relative",
    background: "bg-gray-100 dark:bg-gray-800",
    rounded: "rounded-lg",
    shadow: "",
    padding: "p-1",
    height: "h-14",
    width: "w-full",
    marker: {
      wrapper:
        "absolute top-[4px] left-[4px] duration-200 ease-out focus:outline-none",
      base: "w-full h-full",
      background: "bg-lime-500 dark:bg-gray-900",
      rounded: "rounded-md",
      shadow: "shadow-sm",
    },
    tab: {
      base: "relative inline-flex items-center justify-center flex-shrink-0 w-full ui-focus-visible:outline-0 ui-focus-visible:ring-2 ui-focus-visible:ring-primary-500 dark:ui-focus-visible:ring-primary-400 ui-not-focus-visible:outline-none focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 transition-colors duration-200 ease-out",
      background: "",
      active: "text-white dark:text-white",
      inactive: "text-gray-500 dark:text-gray-400",
      height: "h-10",
      padding: "px-3",
      size: "text-sm",
      font: "font-medium",
      rounded: "rounded-md",
      shadow: "",
    },
  },
};

const route = useRoute();
const router = useRouter();

const selected = computed({
  get() {
    const index = items.findIndex((item) => item.id === route.query.tab);
    if (index === -1) {
      return 0;
    }

    return index;
  },
  set(value) {
    router.replace({
      hash: `#${items[value].id}`,
    });
  },
});
</script>
