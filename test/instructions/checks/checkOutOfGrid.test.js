import buildCheckOutOfGrid from '../../../src/instructions/checks/checkOutOfGrid'

const grid = {
  x: 5,
  y: 5
}

const checkOutOfGrid = buildCheckOutOfGrid({ grid })

describe('checks coords outside the grid', () => {
  it('falls out the grid', () => {
    const wrongX = { x: 6, y: 5 }
    let outOfX = checkOutOfGrid({ coords: wrongX })
    expect(outOfX).toBe(true)

    const wrongY = { x: 5, y: 6 }
    let outOfY = checkOutOfGrid({ coords: wrongY })
    expect(outOfY).toBe(true)
  })

  it('is inside the grid', () => {
    const goodCords = { x: 5, y: 3 }
    let insideGrid = checkOutOfGrid({ coords: goodCords })
    expect(insideGrid).toBe(false)
  })
})
