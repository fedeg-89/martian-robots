import buildCheckForScent from '../../../src/instructions/checks/checkForScent'

const grid = {
  scents: [
    { coords: { x: 5, y: 5 }, orientation: 'N' },
    { coords: { x: 8, y: 3 }, orientation: 'W' }
  ]
}

const checkForScent = buildCheckForScent({ grid })

describe('checks for a scent', () => {
  it('scent found', () => {
    const robot = { coords: { x: 8, y: 3 }, orientation: 'W' }
    let scentFound = checkForScent({ robot })
    expect(scentFound).toBe(true)
  })

  it('no scent', () => {
    const sameCoordsRobot = { coords: { x: 8, y: 3 }, orientation: 'S' }
    let sameCoordsScent = checkForScent({ robot: sameCoordsRobot })
    expect(sameCoordsScent).toBe(false)

    const sameOrientationRobot = { coords: { x: 8, y: 2 }, orientation: 'W' }
    let sameOrientationScent = checkForScent({ robot: sameOrientationRobot })
    expect(sameOrientationScent).toBe(false)
  })
})
