import { onMounted, onUnmounted, ref } from 'vue'

export function useScreenSize() {
  const isMobile = ref(false)

  const checkScreenSize = () => {
    isMobile.value = window.innerWidth <= 980
  }

  onMounted(() => {
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', checkScreenSize)
  })

  return { isMobile }
}
