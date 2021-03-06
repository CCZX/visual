class Vector2D extends Array {
  constructor(x = 1, y = 1) {
    super(x, y)
  }

  set x(v) {
    this[0] = v
  }

  set y(v) {
    this[1] = v
  }

  get x() {
    return this[0]
  }

  get y() {
    return this[1]
  }

  get length() {
    return Math.hypot(this.x, this.y)
  }

  get dir() {
    return Math.atan2(this.y, this.x)
  }

  copy() {
    return new Vector2D(this.x, this.y)
  }

  add(v) {
    this.x = this.x + v.x
    this.y = this.y + v.y
    return this
  }

  sub(v) {
    this.x = this.x - v.x
    this.y = this.y - v.y
    return this
  }

  scale(a) {
    this.x = this.x * a
    this.y = this.y * a
    return this
  }

  cross(v) {
    return this.x * v.y - v.x * this.y
  }

  dot(v) {
    return this.x * v.x + this.y * v.y
  }

  normalize() {
    return this.scale(1 / this.length)
  }

  rotate(rad) {
    const c = Math.cos(rad)
    const s = Math.sin(rad)
    const [x, y] = this

    this.x = x * c + y * -s
    this.y = x * s + y * c

    return this
  }
}
