import buildCheckForRobotInCoords from '../../src/instructions/checks/checkForRobotInCoords'
import buildCheckForScent from '../../src/instructions/checks/checkForScent'
import buildCheckOutOfGrid from '../../src/instructions/checks/checkOutOfGrid'
import buildLooseRobot from '../../src/instructions/looseRobot'
import buildMoveForward from '../../src/instructions/moveForward'
import turnLeft from '../../src/instructions/turnLeft'
import turnRight from '../../src/instructions/turnRight'
import { robot, grid } from '../__mocks__/entities.mock'

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

  describe('move forward', () => {
    const falseFn = () => false
    it('moves in each direction', () => {
      const moveForward = buildMoveForward({
        checkForRobotInCoords: falseFn,
        checkForScent: falseFn,
        checkOutOfGrid: falseFn,
        looseRobot: falseFn
      })
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

    it.skip("can't move because another robot in coords", () => {
      const mockGrid = {
        ...grid,
        robotsCoords: [{ x: 2, y: 3 }]
      }
      const checkForRobotInCoords = buildCheckForRobotInCoords({
        grid: mockGrid
      })
      const moveForward = buildMoveForward({
        checkForRobotInCoords,
        checkForScent: falseFn,
        checkOutOfGrid: falseFn,
        looseRobot: falseFn
      })

      const mockRobot = { coords: { x: 2, y: 2 }, orientation: 'N' }
      moveForward({ robot: mockRobot })
      expect(mockRobot.coords.y).toEqual(2)
    })

    it("can't move because a scent", () => {
      const mockGrid = {
        ...grid,
        scents: [{ coords: { x: 10, y: 10 }, orientation: 'N' }]
      }
      const checkForScent = buildCheckForScent({
        grid: mockGrid
      })
      const moveForward = buildMoveForward({
        checkForRobotInCoords: falseFn,
        checkForScent,
        checkOutOfGrid: falseFn,
        looseRobot: falseFn
      })

      const mockRobot = {
        coords: { x: 10, y: 10 },
        orientation: 'N',
        lost: false
      }
      moveForward({ robot: mockRobot })
      expect(mockRobot.coords.y).toEqual(10)
      expect(mockRobot.lost).toBe(false)
    })

    it('loose a robot that falls off the grid', () => {
      const mockGrid = {
        x: 10,
        y: 10,
        scents: []
      }
      const checkOutOfGrid = buildCheckOutOfGrid({ grid: mockGrid })
      const looseRobot = buildLooseRobot({ grid: mockGrid })
      const moveForward = buildMoveForward({
        checkForRobotInCoords: falseFn,
        checkForScent: falseFn,
        checkOutOfGrid,
        looseRobot
      })

      const mockRobot = {
        coords: { x: 10, y: 10 },
        orientation: 'N',
        lost: false
      }
      moveForward({ robot: mockRobot })
      expect(mockRobot.lost).toBe(true)
      expect(mockGrid.scents[0]).toBeDefined()
      expect(mockGrid.scents[0].coords).toEqual({ x: 10, y: 10 })
      expect(mockGrid.scents[0].orientation).toEqual('N')
    })
  })
})
