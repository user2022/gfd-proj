<script lang="ts" setup>
import type { SelectedMember } from '@/types/Member.ts'
import { ChevronLeft, ChevronRight, X } from 'lucide-vue-next'
import { getImgUrl } from '@/lib/imageUrl.ts'

interface Props {
  selectedMember: SelectedMember
  onClose: () => void
  onChangeMember: (next: boolean) => void
}

defineProps<Props>()
</script>

<template>
  <div
    class="z-50 flex justify-center items-center bg-neutral-950/60 fixed w-full h-full top-0 left-0 inset-0"
  >
    <div class="bg-white md:w-[500px] w-[400px] h-auto inset-0 px-6 py-4 drop-shadow">
      <div class="flex flex-col gap-6">
        <div class="flex flex-row justify-between items-center">
          <h1 class="text-2xl">
            <span class="font-bold">Meet,</span> {{ selectedMember.member.name }}
          </h1>

          <div class="p-2 cursor-pointer" @click="onClose">
            <X />
          </div>
        </div>
        <div class="border-1 border-black -mt-4"></div>
        <div class="flex flex-row gap-4">
          <button
            class="bg-black rounded-[50%] p-0.5 cursor-pointer"
            @click="onChangeMember(false)"
          >
            <ChevronLeft class="text-white" />
          </button>
          <button class="bg-black rounded-[50%] p-0.5 cursor-pointer" @click="onChangeMember(true)">
            <ChevronRight class="text-white" />
          </button>
        </div>
        <img
          :src="getImgUrl(`../assets/images/our-team/${selectedMember.member.img}`)"
          alt="member-img"
          class="max-w-[300px] h-auto self-center"
        />
        <h1 class="text-2xl">{{ selectedMember.member.title }}</h1>
        <div class="border-1 border-black -mt-4"></div>
        <p class="text-md">{{ selectedMember.member.description }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
