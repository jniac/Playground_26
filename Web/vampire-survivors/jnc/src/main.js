import { keyDowns } from './keyboard.js'
import { Pawn } from './pawn.js'

const hero = new Pawn('#hero')

function animate() {
  if (keyDowns.has('ArrowUp')) {
    hero.cy -= 1
  }
  if (keyDowns.has('ArrowDown')) {
    hero.cy += 1
  }
  if (keyDowns.has('ArrowLeft')) {
    hero.cx -= 1
  }
  if (keyDowns.has('ArrowRight')) {
    hero.cx += 1
  }
}

function loop() {
  animate()
  requestAnimationFrame(loop)
}

loop()