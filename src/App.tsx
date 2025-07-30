import EstiloGlobal from './styles'
import Sidebar from './containers/Sidebar/index'
import Projects from './containers/Projects'
import About from './containers/About'
import { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Sidebar />
        <main>
          <About />
          <Projects />
        </main>
      </Container>
    </>
  )
}

export default App
