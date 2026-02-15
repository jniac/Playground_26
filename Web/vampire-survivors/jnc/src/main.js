import { keyDowns } from './keyboard.js'
import { Pawn } from './pawn.js'

const hero = new Pawn('#hero')
const enemy = new Pawn('#enemy')

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

  const dx = hero.cx - enemy.cx
  const dy = hero.cy - enemy.cy
  const dist = Math.sqrt(dx * dx + dy * dy)
  if (dist < hero.radius + enemy.radius) {
    enemy.element.setAttribute('fill', '#0f0')
  }
}

function loop() {
  animate()
  requestAnimationFrame(loop)
}

loop()