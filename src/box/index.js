import _Box, { Orientation, AlignX, AlignY, Horizontal, Vertical } from "./Box"

export { Orientation, AlignX, AlignY } from "./Box"

export const Box = Object.assign(_Box, {
  Orientation,
  AlignX,
  AlignY,
  Horizontal,
  Vertical
})

export default Box
