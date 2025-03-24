export const getImgUrl = (imgUrl: string): string => {
  return new URL(imgUrl, import.meta.url).toString()
}
