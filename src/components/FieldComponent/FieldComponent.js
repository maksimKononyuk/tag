import { useState } from 'react'
import FieldItem from '../FieldItem/FieldItem'
import styles from './style.module.css'

const FieldComponent = ({ matrix, initialMatrix, isWon, setIsWon }) => {
  const [blankElement, setBlankElement] = useState(null)
  const [steps, setSteps] = useState(0)
  const [rightString, setRightString] = useState('')

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
                initialMatrix={initialMatrix}
                setIsWon={setIsWon}
                setSteps={setSteps}
                setRightString={setRightString}
              />
            )
          })}
        </div>
      ))}
      {isWon && (
        <div className={styles.wonDiv}>
          <div className={styles.winerContainer}>
            <div>
              Поздравляем! Вы завершили игру за{' '}
              <span className={styles.steps}>{steps}</span> {rightString}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
export default FieldComponent
