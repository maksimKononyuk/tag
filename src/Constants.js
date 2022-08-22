const gameFieldArray = new Array(16).fill(0).map((_, idx) => idx + 1)

const getMatrix = (arr) => {
  const matrix = [[], [], [], []]
  let x = 0
  let y = 0
  for (let i = 0; i < arr.length; i++) {
    if (x === 4) {
      y++
      x = 0
    }
    matrix[y][x] = arr[i]
    x++
  }
  return matrix
}

export const isValidSwap = (coords, coordsBlank) => {
  const diffX = Math.abs(coords.x - coordsBlank.x)
  const diffY = Math.abs(coords.y - coordsBlank.y)
  return (
    (diffX === 1 || diffY === 1) &&
    (coords.x === coordsBlank.x || coords.y === coordsBlank.y)
  )
}

export const shuffleMatrix = () => {
  gameFieldArray.sort(() => 0.5 - Math.random())
  return getMatrix(gameFieldArray)
}

export let matrix = shuffleMatrix()

export const setInitialMatrix = (newMatrix) => {
  matrix = newMatrix
}
