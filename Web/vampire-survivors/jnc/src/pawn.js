class Pawn {
  constructor(selector) {
    this.element = document.querySelector(selector)
  }

  get cx() {
    return parseFloat(this.element.getAttribute('cx'))
  }

  set cx(value) {
    this.element.setAttribute('cx', value)
  }

  get cy() {
    return parseFloat(this.element.getAttribute('cy'))
  }

  set cy(value) {
    this.element.setAttribute('cy', value)
  }

  get radius() {
    return parseFloat(this.element.getAttribute('r'))
  }
}

export { Pawn }
