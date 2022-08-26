import { useState } from 'react'
import FieldComponent from './components/FieldComponent/FieldComponent'
import styles from './App.module.css'
import { Matrix } from './Constants'

const initialMatrix = new Matrix()
window.matrix = initialMatrix

function App() {
  const [matrix, setMatrix] = useState(initialMatrix.matrix)
  const [isWon, setIsWon] = useState(false)
  const buttonHandler = () => {
    initialMatrix.playSound('shuffleClick')
    const newMatrix = initialMatrix.shuffleMatrix()
    initialMatrix.setInitialMatrix(newMatrix)
    setMatrix(newMatrix)
    setIsWon(false)
  }
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Игра «Пятнашки»</h1>
      <FieldComponent
        matrix={matrix}
        initialMatrix={initialMatrix}
        isWon={isWon}
        setIsWon={setIsWon}
      />
      <button
        className={styles.button}
        style={{ backgroundColor: isWon ? 'green' : '#000' }}
        onClick={buttonHandler}
      >
        Перемешать
      </button>
    </div>
  )
}

export default App
