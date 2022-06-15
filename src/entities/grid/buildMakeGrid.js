const buildMakeGrid =
  ({ validateGrid }) =>
  ({ x, y }) => {
    validateGrid({ x, y })

    return Object.freeze({
      x,
      y,
      robotsCoords: [],
      scents: []
    })
  }

export default buildMakeGrid
