import { useState } from 'react'
import FieldComponent from './components/FieldComponent/FieldComponent'
import styles from './App.module.css'
import {
  matrix as initialMatrix,
  shuffleMatrix,
  setInitialMatrix
} from './Constants'

function App() {
  const [matrix, setMatrix] = useState(initialMatrix)
  const buttonHandler = () => {
    const newMatrix = shuffleMatrix()
    setMatrix(newMatrix)
    setInitialMatrix(newMatrix)
  }
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Игра в Пятнашки</h1>
      <FieldComponent matrix={matrix} />
      <button className={styles.button} onClick={buttonHandler}>
        Перемешать
      </button>
      <h1>{matrix.toString()}</h1>
    </div>
  )
}

export default App
