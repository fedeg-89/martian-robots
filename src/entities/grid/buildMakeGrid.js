const buildMakeGrid =
  ({ validateGrid }) =>
  ({ x, y }) => {
    validateGrid({ x, y })

    return {
      x,
      y,
      robotsCoords: [],
      scents: []
    }
  }

export default buildMakeGrid
