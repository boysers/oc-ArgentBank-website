export function wait(timeMS = 1000): Promise<void> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, timeMS)
  })
}
