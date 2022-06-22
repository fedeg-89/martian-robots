import moveForward from '../../src/instructions/moveForward'
import turnLeft from '../../src/instructions/turnLeft'
import turnRight from '../../src/instructions/turnRight'
import { robot } from '../__mocks__/entities.mock'

describe('Instructions', () => {
  it('turns right orientation', () => {
    const mockRobot = { ...robot }
    mockRobot.orientation = 'N'

    turnRight({ robot: mockRobot })
    expect(mockRobot.orientation).toEqual('E')

    mockRobot.orientation = 'W'
    turnRight({ robot: mockRobot })
    expect(mockRobot.orientation).toEqual('N')
  })

  it('turns left orientation', () => {
    const mockRobot = { ...robot }
    mockRobot.orientation = 'N'

    turnLeft({ robot: mockRobot })
    expect(mockRobot.orientation).toEqual('W')

    mockRobot.orientation = 'W'
    turnLeft({ robot: mockRobot })
    expect(mockRobot.orientation).toEqual('S')
  })

  it('move forward', () => {
    const baseRobot = {
      coords: { x: 5, y: 5 }
    }
    let mockRobot

    mockRobot = { ...baseRobot, orientation: 'N' }
    moveForward({ robot: mockRobot })
    expect(mockRobot.coords.y).toEqual(6)

    mockRobot = { ...baseRobot, orientation: 'E' }
    moveForward({ robot: mockRobot })
    expect(mockRobot.coords.x).toEqual(6)

    mockRobot = { ...baseRobot, orientation: 'S' }
    moveForward({ robot: mockRobot })
    expect(mockRobot.coords.y).toEqual(4)

    mockRobot = { ...baseRobot, orientation: 'W' }
    moveForward({ robot: mockRobot })
    expect(mockRobot.coords.x).toEqual(4)
  })
})
