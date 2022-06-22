import { MIN_GRID_COORD } from '../../entities/grid'

const buildCheckOutOfGrid =
  ({ grid }) =>
  ({ coords: { x, y } }) => {
    if (x < MIN_GRID_COORD || x > grid.x) {
      // out of x range
      return true
    }
    if (y < MIN_GRID_COORD || y > grid.y) {
      // out of y range
      return true
    }

    return false
  }

export default buildCheckOutOfGrid
