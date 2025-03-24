<script lang="ts" setup>
import TeamCard from '@/components/TeamCard.vue'
import { computed, ref } from 'vue'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'
import type { Member, SelectedMember } from '@/types/Member.ts'
import Modal from '@/components/Modal.vue'

const members: Member[] = [
  {
    title: 'Backend Developer',
    img: 'woman1.png',
    name: 'Sophia Carter',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    title: 'Frontend Developer',
    img: 'man1.png',
    name: 'James Thompson',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna.',
  },
  {
    title: 'IT Security',
    img: 'g1.png',
    name: 'Emma Richardson',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
  },
  {
    title: 'Backend Developer',
    img: 'woman1.png',
    name: 'Liam Anderson',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
  },
  {
    title: 'Frontend Developer',
    img: 'woman1.png',
    name: 'Olivia Mitchell',
    description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.',
  },
  {
    title: 'Backend Developer',
    img: 'man1.png',
    name: 'Benjamin Scott',
    description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit.',
  },
]

const selectedMember = ref<SelectedMember | undefined>()

const setSelectedMember = (index: number, member: Member) => {
  selectedMember.value = { index, member }
}

const setSelectedNone = () => {
  selectedMember.value = undefined
}

const onChangeMember = (next: boolean) => {
  if (!selectedMember.value) {
    console.log('No existing member selected...')
    return
  }

  let index = selectedMember.value.index

  if (index === duplicatedMembers.value.length && next) index = 0
  else if (index === 0 && !next) index = duplicatedMembers.value.length
  else {
    if (next) index += 1
    else index -= 1
  }

  setSelectedMember(index, duplicatedMembers.value[index])
}

// Duplicating the array just so I don't need to manually insert so many members
const duplicatedMembers = computed(() => Array(7).fill(members).flat())

// *** Pagination ***
// Pag state
const itemsPerPage = 18
const currentPage = ref(1)

// Calculate total pages
const totalPages = computed(() => Math.ceil(duplicatedMembers.value.length / itemsPerPage))

// Get members for the current page
const paginatedMembers = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  return duplicatedMembers.value.slice(start, start + itemsPerPage)
})

// Move to next page
const nextPage = () => {
  currentPage.value = currentPage.value === totalPages.value ? 1 : currentPage.value + 1
}

// Move to previous page
const prevPage = () => {
  currentPage.value = currentPage.value === 1 ? totalPages.value : currentPage.value - 1
}

// Set page when clicking a circle
const setPage = (page: number) => {
  currentPage.value = page
}
</script>

<template>
  <div class="mt-12 md:pl-32 px-2 pt-12 flex flex-col gap-6">
    <Modal
      v-if="selectedMember"
      :on-change-member="onChangeMember"
      :on-close="() => setSelectedNone()"
      :selected-member="selectedMember"
    />
    <h2 class="text-4xl font-bold text-black">Our Team</h2>
    <hr class="border-t-2 border-black w-full" />

    <div class="md:mr-32 mr-0 flex flex-col gap-6">
      <!-- Pagination Controls -->
      <div class="flex justify-center gap-6 items-center mb-4">
        <button
          class="p-3 bg-gray-300 rounded-[100%] hover:bg-gray-400 cursor-pointer"
          @click="prevPage"
        >
          <ChevronLeft />
        </button>
        <div>{{ currentPage }}</div>
        <button
          class="p-3 bg-gray-300 rounded-[100%] hover:bg-gray-400 cursor-pointer"
          @click="nextPage"
        >
          <ChevronRight />
        </button>
      </div>

      <div class="flex flex-row gap-6 flex-wrap md:justify-start justify-center">
        <template v-for="(member, index) in paginatedMembers" :key="member.title + index">
          <TeamCard
            :img="member.img"
            :title="member.title"
            @click="setSelectedMember(index, member)"
          />
        </template>
      </div>

      <!-- Page Indicators -->
      <div class="flex justify-center mt-6 space-x-2">
        <span
          v-for="page in totalPages"
          :key="page"
          :class="page === currentPage ? 'bg-black' : 'bg-gray-300'"
          class="w-3 h-3 rounded-full cursor-pointer"
          @click="setPage(page)"
        ></span>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
