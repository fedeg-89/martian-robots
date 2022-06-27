const formatLaunchMissionOutput = (missionResult) => {
  let output = ''
  missionResult.forEach(({ coords, orientation, lost }, index, arr) => {
    const lostText = lost ? ' LOST' : ''
    const textResult = `${coords.x} ${coords.y} ${orientation}${lostText}`

    output = output + textResult
    if (index !== arr.length - 1) {
      output = output + '\n'
    }
  })

  return output
}

export default formatLaunchMissionOutput
