import { grid } from '../__mocks__/entities.mock'
import buildGetInstruction from '../../src/instructions'
import InstructionError from '../../src/errors/instructionError'

describe.skip('Get instruction by code', () => {
  it('Get the right instruction', () => {
    const instructionCode = 'F'
    const getInstruction = buildGetInstruction({ grid })

    const instruction = getInstruction({ instructionCode })
    expect(instruction).toBe('function')
  })

  it('Get error for unknown instruction', () => {
    const instructionCode = 'X'
    const getInstruction = buildGetInstruction({ grid })

    const doGetInstruction = () => {
      getInstruction({ instructionCode })
    }

    expect(doGetInstruction).toThrow(InstructionError)
    expect(doGetInstruction).toThrow('not implemented')
  })
})
