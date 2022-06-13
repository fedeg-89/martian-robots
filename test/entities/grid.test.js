import makeGrid, {
  MIN_GRID_COORD,
  MAX_GRID_COORD
} from '../../src/entities/grid'

describe('Make Grid', () => {
  it('makes a grid', () => {
    const coords = { x: 5, y: 5 }
    const grid = makeGrid(coords)

    expect(grid.y).toEqual(coords.y)
  })

  it('throws for empty coord', () => {
    const doMakeGrid = () => {
      const coords = { y: 5 }
      makeGrid(coords)
    }
    expect(doMakeGrid).toThrow(/*TypeError*/)
    expect(doMakeGrid).toThrow('Empty')
  })

  it('throws for out of range coord', () => {
    const doMakeGrid = ({ y }) => {
      const coords = { x: 10, y }
      makeGrid(coords)
    }

    const invalidMin = MIN_GRID_COORD - 1
    const invalidMax = MAX_GRID_COORD + 1

    expect(() => doMakeGrid({ y: invalidMin })).toThrow('between')
    expect(() => doMakeGrid({ y: invalidMax })).toThrow('between')
  })
})
