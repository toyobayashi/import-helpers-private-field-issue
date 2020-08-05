class A {}

class B extends A {
  #x: number = 1

  getX (): number {
    return this.#x
  }

  setX (v: number): void {
    this.#x = v
  }
}

export { B }
