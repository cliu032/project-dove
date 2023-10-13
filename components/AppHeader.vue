<template>
  <header class="absolute inset-x-0 top-0 z-50">
    <nav
      class="flex items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <div class="flex lg:flex-1">
        <a href="#" class="-m-1.5 p-1.5">
          <span class="sr-only">{{ company.name }}</span>
          <NuxtImg
            :width="company.logoSize"
            :height="company.logoSize"
            :src="company.logoUrl"
          />
        </a>
      </div>
      <div class="flex lg:hidden">
        <a href="#" class="-m-1.5 p-1.5">
          <span class="sr-only">{{ company.name }}</span>
          <NuxtImg
            :width="company.logo2Size"
            :height="company.logo2Size"
            :src="company.logo2Url"
          />
        </a>
      </div>
    </nav>
  </header>
</template>

<script setup>
const company = {
  name: "Dove",
  logoUrl: "https://assets.unileversolutions.com/v1/114107637.png",
  logoSize: 60,
  logo2Url: "https://assets.unileversolutions.com/v1/1513657.png",
  logo2Size: 40,
};
</script>
