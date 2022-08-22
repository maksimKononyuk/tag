import FieldComponent from './components/FieldComponent/FieldComponent'
import styles from './App.module.css'
import { matrix } from './Constants'

function App() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Игра в Пятнашки</h1>
      <FieldComponent matrix={matrix} />
      <button
        className={styles.button}
        onClick={() => console.log('Вы кликнули по кнопке')}
      >
        Перемешать
      </button>
    </div>
  )
}

export default App
