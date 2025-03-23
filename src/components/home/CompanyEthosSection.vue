<script lang="ts" setup>
import { CompanyText } from '@/lib/helpers/companyText.ts'
</script>

<template>
  <div class="mx-auto mt-12 md:pl-32 pt-12">
    <div class="flex flex-col md:flex-row gap-12 justify-between">
      <!-- Left Text Section -->
      <div class="flex flex-col gap-16 flex-1 px-4">
        <h2 class="text-4xl font-bold text-black">
          Company <br />
          <span class="whitespace-nowrap">Values & Ethos</span>
        </h2>

        <img alt="ethos-house" class="" src="../../assets/images/ethos_house_img_1.png" />

        <img
          alt="ethos_cottage"
          class="w-[50%] self-end md:block hidden"
          src="../../assets/images/ethos_cottage.png"
        />
      </div>

      <!-- Right Section: Images & Description -->
      <div class="flex flex-col items-end gap-6 flex-3">
        <!-- Image Section -->
        <div class="flex flex-col gap-6 w-full">
          <img
            alt="ethos-row-1"
            class="w-full [clip-path:inset(0_15%_0_0)] md:[clip-path:inset(0_0_0_0)]"
            src="../../assets/images/ethos_row_1.png"
          />
          <p class="text-lg text-white block md:hidden bg-black p-12">{{ CompanyText.ethos.p1 }}</p>
          <img
            alt="ethos-row-2"
            class="w-full [clip-path:inset(0_0_0_15%)] md:[clip-path:inset(0_0_0_0)]"
            src="../../assets/images/ethos_row_2.png"
          />
          <p class="text-lg text-white block md:hidden bg-black p-12">{{ CompanyText.ethos.p2 }}</p>
        </div>

        <!-- Description Section -->
        <div class="text-lg text-black w-full pr-32 hidden md:block">
          <p>
            {{ CompanyText.ethos.p1 }}
          </p>
          <p class="mt-4">
            {{ CompanyText.ethos.p2 }}
          </p>
        </div>
        <hr class="mt-6 border-t-2 border-black w-full" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
