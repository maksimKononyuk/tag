import { useEffect, useRef } from 'react'

import styles from './style.module.css'

const FieldItem = ({
  number,
  translate,
  setBlankElement,
  blankElement,
  initialMatrix,
  setIsWon,
  setSteps,
  setRightString
}) => {
  const elem = useRef()

  useEffect(() => {
    elem.current.style.transform = `translate(${translate.y * 100}%, ${
      translate.x * 100
    }%)`
    elem.current.setAttribute('x', translate.y)
    elem.current.setAttribute('y', translate.x)
    if (number === 16) setBlankElement(elem.current)
  })

  const buttonHandler = (e) => {
    const clickElement = e.target.closest('div')
    const clickCoords = {
      x: +clickElement.getAttribute('y'),
      y: +clickElement.getAttribute('x')
    }
    const blankCoords = {
      x: +blankElement.getAttribute('y'),
      y: +blankElement.getAttribute('x')
    }
    if (initialMatrix.isValidSwap(clickCoords, blankCoords)) {
      initialMatrix.playSound('click')
      clickElement.style.transform = `translate(${blankCoords.y * 100}%, ${
        blankCoords.x * 100
      }%)`
      blankElement.style.transform = `translate(${clickCoords.y * 100}%, ${
        clickCoords.x * 100
      }%)`
      blankElement.setAttribute('y', clickCoords.x)
      blankElement.setAttribute('x', clickCoords.y)
      clickElement.setAttribute('y', blankCoords.x)
      clickElement.setAttribute('x', blankCoords.y)

      const temp = initialMatrix.matrix[clickCoords.x][clickCoords.y]
      initialMatrix.matrix[clickCoords.x][clickCoords.y] =
        initialMatrix.matrix[blankCoords.x][blankCoords.y]
      initialMatrix.matrix[blankCoords.x][blankCoords.y] = temp

      initialMatrix.stepIncrement()

      if (initialMatrix.isWonMatrix()) {
        setIsWon(true)
        setSteps(initialMatrix.steps)
        setRightString(initialMatrix.getRightString())
      }
    } else initialMatrix.playSound('errorClick')
  }

  return (
    <div
      ref={elem}
      className={styles.container}
      value={number}
      style={{
        display: number === 16 ? 'none' : 'block'
      }}
      onClick={buttonHandler}
    >
      <span className={styles.innerSpan}>{number}</span>
    </div>
  )
}

export default FieldItem
