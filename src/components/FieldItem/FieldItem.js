import { useEffect, useRef } from 'react'
import { isValidSwap } from '../../Constants'

import styles from './style.module.css'

const FieldItem = ({ number, translate, setBlankElement, blankElement }) => {
  const elem = useRef()

  useEffect(() => {
    if (number === 16) setBlankElement(elem.current)
  }, [number])

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
    if (isValidSwap(clickCoords, blankCoords)) {
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
    }
  }

  return (
    <div
      ref={elem}
      className={styles.container}
      value={number}
      x={translate.y}
      y={translate.x}
      style={{
        transform: `translate(${translate.y * 100}%, ${translate.x * 100}%)`,
        display: number === 16 ? 'none' : 'block'
      }}
      onClick={buttonHandler}
    >
      <span className={styles.innerSpan}>{number}</span>
    </div>
  )
}

export default FieldItem
