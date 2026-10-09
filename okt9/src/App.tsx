import Galeria from './Components/Galeria'
/*
function App() {
  const [KEPLISTA,aktindex] = UseKepContext()

  return (
    <>
      <header>
        <h1>
          KÉPGALÉRIA
        </h1>
      </header>
      <main>
        <Nagykep kepem={KEPLISTA[aktindex]}/>
        <Galeria lista={KEPLISTA} aktindex={aktindex}/>
      </main>
    </>
  )
}

export default App
*/
import './App.css'
import NagyKep from './Components/NagyKep'


import { useKepContext } from './Contexts/KepContext'

function App() {
  const { kepLista, aktIndex } = useKepContext();
  return (
    <>
      <header><h1>Képgaléria</h1></header>
      <main>

        <NagyKep kepem={kepLista[aktIndex]} />
        <Galeria lista={kepLista} aktIndex={aktIndex} />
      </main>
      <footer>Saját név</footer>
    </>
  )
}

export default App