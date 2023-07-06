export const getPublicData = () => {
  const data = new Array(10).fill(null).map((item, idx) => `Public Item ${idx + 1}`)
  return new Promise((resolve) => {
    setTimeout(() => { resolve(data) }, 2000)
  })
}

export const getPrivateData = () => {
  const data = new Array(10).fill(null).map((item, idx) => `Private Item ${idx + 1}`)
  return new Promise((resolve) => {
    setTimeout(() => { resolve(data) }, 2000)
  })
}

