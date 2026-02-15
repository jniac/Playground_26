
/** @type {Map<string, {code: string, time: number}>} */
const keyDowns = new Map()

document.addEventListener('keydown', (event) => {
  const info = {
    code: event.code,
    time: performance.now(),
  }
  keyDowns.set(event.code, info)
})

document.addEventListener('keyup', (event) => {
  keyDowns.delete(event.code)
})

export {
  keyDowns
}

