import { useEffect, useRef } from 'react'
import { isValidSwap } from '../../Constants'

import styles from './style.module.css'

const FieldItem = ({
  number,
  translate,
  setBlankElement,
  setMetrix,
  matrix,
  blankElement
}) => {
  const elem = useRef()

  useEffect(() => {
    if (number === 16) setBlankElement(elem.current)
  }, [])

  const buttonHandler = (e) => {
    const clickElement = e.target.closest('div')
    const clickCoords = {
      x: +clickElement.getAttribute('x'),
      y: +clickElement.getAttribute('y')
    }
    const blankCoords = {
      x: +blankElement.getAttribute('x'),
      y: +blankElement.getAttribute('y')
    }
    if (isValidSwap(clickCoords, blankCoords)) {
      clickElement.style.transform = `translate(${blankCoords.x * 100}%, ${
        blankCoords.y * 100
      }%)`
      blankElement.style.transform = `translate(${translate.x * 100}%, ${
        translate.y * 100
      }%)`
      blankElement.setAttribute('x', clickCoords.x)
      blankElement.setAttribute('y', clickCoords.y)
      clickElement.setAttribute('x', blankCoords.x)
      clickElement.setAttribute('y', blankCoords.y)
    }
  }

  return (
    <div
      ref={elem}
      className={styles.container}
      value={number}
      x={translate.x}
      y={translate.y}
      style={{
        transform: `translate(${translate.x * 100}%, ${translate.y * 100}%)`,
        display: number === 16 ? 'none' : 'block'
      }}
      onClick={buttonHandler}
    >
      <span className={styles.innerSpan}>{number}</span>
    </div>
  )
}

export default FieldItem
