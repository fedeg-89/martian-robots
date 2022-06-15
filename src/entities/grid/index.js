import buildMakeGrid from './buildMakeGrid.js'
import validateGrid from './validations'

export const MIN_GRID_COORD = 1
export const MAX_GRID_COORD = 50

const makeGrid = buildMakeGrid({ validateGrid })

export default makeGrid
