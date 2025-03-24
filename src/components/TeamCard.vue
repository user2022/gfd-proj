<script lang="ts" setup>
import { getImgUrl } from '@/lib/imageUrl.ts'

interface Props {
  title: string
  img: string
}

const props = defineProps<Props>()
</script>

<template>
  <div class="w-[235px] h-[313px] relative group overflow-hidden">
    <!-- Default Image (Hidden on Hover) -->
    <img
      :src="getImgUrl(`../assets/images/our-team/${props.img}`)"
      alt="team-pic"
      class="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
    />

    <!-- Hover Image (Shown on Hover) -->
    <div
      class="bg-black p-3 text-white z-10 absolute top-0 w-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
    >
      <p class="text-xl">{{ title }}</p>
    </div>
    <img
      alt="team-pic-hover"
      class="z-1 w-full h-full object-cover absolute top-8 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      src="../assets/images/our-team/woman_hover.png"
    />
    <div
      class="absolute bottom-4 right-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10 flex flex-col gap-2 cursor-pointer"
    >
      <p class="text-white text-xl drop-shadow-lg">View Profile</p>
      <div class="border-t-2 border-white w-full"></div>
    </div>
  </div>
</template>

<style scoped></style>
