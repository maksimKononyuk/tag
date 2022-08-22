import { useState } from 'react'
import FieldItem from '../FieldItem/FieldItem'
import styles from './style.module.css'

const FieldComponent = ({ matrix }) => {
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
