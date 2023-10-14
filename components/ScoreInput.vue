<script setup>
const page = ref(NaN);
const items = ref(Array(10));
const preset = {
  base: "grow shrink basis-8 min-w-0 flex justify-center",
  rounded: "first-of-type:rounded-s-md last-of-type:rounded-e-md",
};
</script>

<template>
  <UPagination
    v-model="page"
    :max="10"
    :page-count="1"
    :total="items.length"
    :ui="preset"
    :active-button="{
      inactiveClass: 'bg-primary-600 opacity-90',
    }"
    size="md"
  >
    <template #prev="{ onClick }">
      <div></div>
    </template>

    <template #next="{ onClick }">
      <div></div>
    </template>
  </UPagination>
</template>
