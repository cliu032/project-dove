<script setup>
import { DialogTitle } from "@headlessui/vue";
import { CheckIcon } from "@heroicons/vue/24/solid";

defineProps(["open"]);
const emit = defineEmits(["update:open"]);

function handleClose() {
  emit("update:open", false);
}
</script>

<template>
  <UModal v-bind:model-value="open" @close="handleClose">
    <UCard :ui="{ divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
      <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
        <div class="flex flex-col items-center">
          <div
            class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 sm:mx-0 sm:h-10 sm:w-10"
          >
            <CheckIcon class="h-6 w-6 text-lime-600" aria-hidden="true" />
          </div>
          <div class="mt-4 text-center">
            <DialogTitle
              as="h3"
              class="text-base font-semibold leading-6 text-gray-900"
              >Thank you for your feedback</DialogTitle
            >
            <div class="mt-2">
              <p class="text-sm text-gray-500">
                Thank you for taking the time to leave your feedback!
              </p>
              <p class="mt-1 text-sm text-gray-500">
                We're constantly trying to improve our products, so your input
                is valuable. We'll look closely at what you've said and see how
                we can improve things.
              </p>
            </div>
          </div>
        </div>
      </div>
      <UButton
        label="Continue"
        color="primary"
        variant="ghost"
        size="lg"
        block
        @click="handleClose"
      />
    </UCard>
  </UModal>
</template>
