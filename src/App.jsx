import About from './components/about/About'
import Experiencia from './components/experiencia/Experiencia'
import { Habilidades } from './components/habilidades/Habilidades'
import Header from './components/header/Header'
import info from "./assets/info.json"
import Contact from './components/email/Contact'
import { Footer } from './components/footer/Footer'

function App() {

  return (
    <div className=''>
      <Header info={info}/>
      <About info={info}/>
      <Experiencia info={info}/>
      <Habilidades info={info}/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
