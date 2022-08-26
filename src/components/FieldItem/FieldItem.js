import { useEffect, useRef } from 'react'
import { Helpers } from '../../Halpers'

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
    if (number === 16) setBlankElement(elem.current)
    elem.current.style.transform = `translate(${translate.y * 100}%, ${
      translate.x * 100
    }%)`
    elem.current.setAttribute('x', translate.y)
    elem.current.setAttribute('y', translate.x)
  })

  const buttonHandler = (event) => {
    const clickElement = event.target.closest('div')
    const clickCoords = Helpers.getElememtCoords(clickElement)
    const blankCoords = Helpers.getElememtCoords(blankElement)
    if (initialMatrix.isValidSwap(clickCoords, blankCoords)) {
      initialMatrix.playSound('click')
      Helpers.moveElement(clickElement, blankElement)
      Helpers.changeElementsAttributeXY(clickElement, blankElement)
      initialMatrix.changeMatrixElements(clickCoords, blankCoords)
      if (initialMatrix.isWonMatrix()) {
        setIsWon(true)
        setSteps(initialMatrix.getSteps())
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
