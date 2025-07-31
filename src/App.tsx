import { ThemeProvider } from 'styled-components'

import EstiloGlobal from './styles'
import Sidebar from './containers/Sidebar/index'
import Projects from './containers/Projects'
import About from './containers/About'
import { Container } from './styles'
import temaLight from './Themes/light'
import temaDark from './Themes/dark'
import { useState } from 'react'

function App() {
  const [estaUsandoTemaDark, setEstaUsandoTemaDark] = useState(false)

  function trocaTema() {
    setEstaUsandoTemaDark(!estaUsandoTemaDark)
  }

  return (
    <ThemeProvider theme={estaUsandoTemaDark ? temaDark : temaLight}>
      <EstiloGlobal />
      <Container>
        <Sidebar trocaTema={trocaTema} />
        <main>
          <About />
          <Projects />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
