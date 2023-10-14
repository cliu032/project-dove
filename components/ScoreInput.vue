<script setup>
const page = ref(1);
const items = ref(Array(10));
</script>

<template>
  <UPagination
    v-model="page"
    :max="10"
    :page-count="1"
    :total="items.length"
    size="xl"
    :ui="{
      rounded: 'first-of-type:rounded-s-md last-of-type:rounded-e-md',
    }"
  >
    <template #prev="{ onClick }">
      <div></div>
    </template>

    <template #next="{ onClick }">
      <div></div>
    </template>
  </UPagination>
</template>
