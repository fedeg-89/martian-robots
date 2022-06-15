import { MIN_GRID_COORD } from '../../src/entities/grid'
import makeRobot from '../../src/entities/robot'
import RobotError from '../../src/errors/robotError'

const mockGrid = {
  x: 5,
  y: 5
}

describe('Make Robot', () => {
  it('makes a robot', () => {
    const coords = { x: 2, y: 2 }
    const orientation = 'N'
    const robot = makeRobot({ coords, orientation, grid: mockGrid })

    expect(robot).toBeDefined()
  })

  it('throws for empty coord', () => {
    const doMakeRobot = () => {
      const coords = { y: 2 }
      const orientation = 'N'
      makeRobot({ coords, orientation, grid: mockGrid })
    }
    expect(doMakeRobot).toThrow(RobotError)
    expect(doMakeRobot).toThrow('Empty')
  })

  it('throws for out of range coord', () => {
    const doMakeRobot = ({ y }) => {
      const coords = { x: 10, y }
      const orientation = 'N'
      makeRobot({ coords, orientation, grid: mockGrid })
    }

    const invalidMin = MIN_GRID_COORD - 1
    const invalidMax = mockGrid.y + 1

    expect(() => doMakeRobot({ y: invalidMin })).toThrow('between')
    expect(() => doMakeRobot({ y: invalidMax })).toThrow('between')
  })

  it('throws for wrong orientation', () => {
    const doMakeRobot = () => {
      const coords = { x: 2, y: 2 }
      const orientation = 'J'
      makeRobot({ coords, orientation, grid: mockGrid })
    }
    expect(doMakeRobot).toThrow(RobotError)
    expect(doMakeRobot).toThrow('Orientation')
  })
})
