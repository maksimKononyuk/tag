import { useState } from 'react'
import { matrix as initionalMatrix } from '../../Constants'
import FieldItem from '../FieldItem/FieldItem'
import styles from './style.module.css'

const FieldComponent = () => {
  const [matrix, setMetrix] = useState(initionalMatrix)
  const [blankElement, setBlankElement] = useState(null)
  return (
    <div className={styles.container}>
      {matrix.map((row, x) => (
        <div key={x}>
          {row.map((col, y) => {
            return (
              <FieldItem
                number={col}
                translate={{ x, y }}
                key={y}
                setMetrix={setMetrix}
                matrix={matrix}
                setBlankElement={setBlankElement}
                blankElement={blankElement}
              />
            )
          })}
        </div>
      ))}
    </div>
  )
}
export default FieldComponent
