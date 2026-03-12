import { useState } from 'react'
import './style.scss'

function App() {
  const [ligar, setLigar] = useState(false)

  console.log(ligar);

  return (
    <>
      <body className={`${ligar ? "luz" : "breu"}`}>
        <div>
          <button onClick={() => setLigar(!ligar)}>
            {`${ligar ? "Apagar a Luz" : "Ligar a Luz"}`}
          </button>
        </div>
      </body>
    </>
  )
}

export default App
