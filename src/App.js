import { useState } from 'react'
import FieldComponent from './components/FieldComponent/FieldComponent'
import styles from './App.module.css'
import { matrix as initionalMatrix } from './Constants'

function App() {
  const [matrix, setMatrix] = useState(initionalMatrix)
  const buttonHandler = () => {
    setMatrix(() => {
      const matrix = [
        [15, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [1, 13, 14, 16]
      ]
      return matrix
    })
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
