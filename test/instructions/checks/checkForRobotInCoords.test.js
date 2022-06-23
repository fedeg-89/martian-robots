import buildCheckForRobotInCoords from '../../../src/instructions/checks/checkForRobotInCoords'

const grid = {
  robotsCoords: [
    { x: 5, y: 5 },
    { x: 8, y: 3 }
  ]
}

const checkForRobotInCoords = buildCheckForRobotInCoords({ grid })

describe.skip('checks for a robot in destiny coords', () => {
  it('robot found in coords', () => {
    const coords = { x: 8, y: 3 }
    let robotFound = checkForRobotInCoords({ coords })
    expect(robotFound).toBe(true)
  })

  it('no robot in coords', () => {
    const coords = { x: 5, y: 3 }
    let robotFound = checkForRobotInCoords({ coords })
    expect(robotFound).toBe(false)
  })
})
