import soundFile from './assets/sound/sound.mp3'
import soundFileError from './assets/sound/error.mp3'
import shuffleSound from './assets/sound/shuffle.mp3'
export class Matrix {
  gameFieldArray = new Array(16).fill(0).map((_, idx) => idx + 1)
  matrix = [[], [], [], []]
  winingCombination = {
    part1: [1, 2, 3, 4],
    part2: [5, 6, 7, 8],
    part3: [9, 10, 11, 12],
    part4a: [13, 14, 15, 16],
    part4b: [16, 13, 14, 15]
  }
  steps = 0
  clickSound = new Audio(soundFile)
  errorClickSound = new Audio(soundFileError)
  shuffleSoundClick = new Audio(shuffleSound)
  constructor() {
    this.matrix = this.shuffleMatrix()
    this.clickSound.volume = 0.4
    this.errorClickSound.volume = 0.2
    this.shuffleSoundClick.volume = 0.4
  }

  getMatrix(arr) {
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

  isValidSwap(coords, coordsBlank) {
    const diffX = Math.abs(coords.x - coordsBlank.x)
    const diffY = Math.abs(coords.y - coordsBlank.y)
    return (
      (diffX === 1 || diffY === 1) &&
      (coords.x === coordsBlank.x || coords.y === coordsBlank.y)
    )
  }

  shuffleMatrix() {
    let position
    do {
      this.gameFieldArray.sort(() => 0.5 - Math.random())
      for (let i = 0; i < this.gameFieldArray.length; i++) {
        if (this.gameFieldArray[i] === 16) {
          if (i < 4) position = 1
          else if (i < 8) position = 2
          else if (i < 12) position = 3
          else position = 4
        }
      }
    } while (!this.isValidArray(position))
    return this.getMatrix(this.gameFieldArray)
  }

  setInitialMatrix(newMatrix) {
    this.matrix = newMatrix
  }

  stepIncrement() {
    this.steps++
  }

  isValidArray(position) {
    let counter = position
    let currentNumber
    for (let i = 0; i < this.gameFieldArray.length - 1; i++) {
      const number = this.gameFieldArray[i]
      if (number === 16) continue
      currentNumber = number
      for (let j = i + 1; j < this.gameFieldArray.length; j++) {
        if (this.gameFieldArray[j] < currentNumber) counter++
      }
    }
    return counter % 2 === 0
  }

  isWonMatrix() {
    let row = 0
    while (row < 4) {
      for (let i = 0; i < this.matrix[row].length; i++) {
        if (row === 0) {
          if (this.matrix[0][i] !== this.winingCombination.part1[i])
            return false
        }
        if (row === 1) {
          if (this.matrix[1][i] !== this.winingCombination.part2[i])
            return false
        }
        if (row === 2) {
          if (this.matrix[2][i] !== this.winingCombination.part3[i])
            return false
        }
        if (row === 3) {
          if (
            this.matrix[3][i] !== this.winingCombination.part4a[i] &&
            this.matrix[3][i] !== this.winingCombination.part4b[i]
          )
            return false
        }
      }
      row++
    }
    return true
  }

  getRightString() {
    const lastDigit = this.steps % 10
    const last2Digits = this.steps % 100
    if (
      lastDigit === 0 ||
      lastDigit > 4 ||
      (last2Digits > 10 && last2Digits < 15)
    )
      return 'шагов'
    else if (lastDigit === 1) return 'шаг'
    else return 'шага'
  }

  playSound(str) {
    let audio
    if (str === 'errorClick') audio = this.errorClickSound
    if (str === 'shuffleClick') audio = this.shuffleSoundClick
    if (str === 'click') audio = this.clickSound
    audio.pause()
    audio.currentTime = 0
    audio.play()
  }
}
