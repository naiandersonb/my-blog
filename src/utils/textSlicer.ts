export function textSlicer(text: string, maxLength = 336) {
  if (text.length > maxLength) {
    return `${text.slice(0, maxLength)}...`
  }
  return text
}
