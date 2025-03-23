<script lang="ts" setup>
import { useScreenSize } from '@/hooks/useScreenSize.ts'
import { CompanyText } from '@/lib/helpers/companyText.ts'

const { isMobile } = useScreenSize()
</script>

<template>
  <div>
    <template v-if="isMobile">
      <div class="relative w-full overflow-x-hidden h-screen">
        <div class="bg-black w-full h-[600px] absolute top-72"></div>
        <img
          alt="home-bg"
          class="absolute top-48 left-20"
          src="../../assets/images/home_bg_1.png"
        />
        <img
          alt="image-right"
          class="absolute -right-6 top-8 md:right-24 max-w-[561px] h-auto w-5/6"
          src="../../assets/images/mobile/home_top_right_1_mobile_.png"
        />

        <div class="bg-white py-14 px-10 flex flex-col gap-6 absolute w-5/6 top-80 left-8">
          <h1 class="text-3xl font-bold">{{ CompanyText.home.title }}</h1>
          <div class="w-full border-b"></div>
          <p>{{ CompanyText.home.p1 }}</p>
        </div>

        <img
          alt="bot-right"
          class="absolute top-[750px] md:top-[700px]"
          src="../../assets/images/mobile/home_top_right_1_mobile.png"
        />

        <div class="bg-[#f5f5f5] p-4 absolute top-[1150px] left-8 pr-10 pb-24">
          <p>
            {{ CompanyText.home.p2 }}
          </p>
        </div>

        <img
          alt="bot-right-mob"
          class="absolute top-[1340px] right-0"
          src="../../assets/images/mobile/home_bottom_right_1_mobile.png"
        />
      </div>
    </template>
    <template v-else>
      <div class="relative h-screen">
        <!-- Half black/white BG -->
        <div class="absolute top-0 left-0 w-1/2 h-full bg-white"></div>
        <div class="absolute top-0 right-0 w-1/2 h-full bg-black"></div>
        <div class="absolute bottom-0 h-[500px] w-[500px] left-[30vw] bg-black"></div>

        <!-- Floating Center -->
        <img
          alt="bg-center"
          class="top-20 left-1/2 transform -translate-x-1/2 absolute"
          src="../../assets/images/home_bg_1.png"
        />
        <div
          class="bg-white w-[720px] h-[447px] px-12 py-20 top-40 left-1/2 transform -translate-x-1/2 absolute flex flex-col gap-6"
        >
          <h1 class="text-5xl font-bold">{{ CompanyText.home.title }}</h1>
          <div class="w-full border-b"></div>
          <p class="2xl:mr-0 xl:mr-24 lg:mr-44 mr-52">{{ CompanyText.home.p1 }}</p>
          <p>{{ CompanyText.home.p2 }}</p>
        </div>

        <!-- Floating Frames -->
        <img
          alt="door-left-top"
          class="absolute top-6 h-auto max-w-[232px] md:w-[200px] xl:w-[232px]"
          src="../../assets/images/home_bg_top_left_1.png"
        />
        <img
          alt="bottom-left"
          class="absolute bottom-0 left-32 h-auto max-w-[701px] w-3/6"
          src="../../assets/images/home_bottom_left_1.png"
        />
        <img
          alt="bottom-right"
          class="absolute bottom-0 right-24 max-w-[516px] h-auto w-2/6"
          src="../../assets/images/home_bottom_right_1.png"
        />
        <img
          alt="top-right"
          class="absolute right-0 top-24 max-w-[457px] min-w-[350px] w-2/6 h-auto"
          src="../../assets/images/home_top_right_1.png"
        />
      </div>
    </template>
  </div>
</template>

<style scoped></style>
