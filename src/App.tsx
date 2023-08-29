
import './App.css'
import {Header} from './layout/header/Header';
import { Main } from './layout/sections/main/Main';
import {Skills} from './layout/sections/skills/Skills';
import { Works } from './layout/sections/works/Works';
import {Education} from './layout/sections/education/Education';
import { Contacts } from './layout/sections/contacts/Contacts';
import {Footer} from './layout/sections/footer/Footer'

function App() {
  

  return (
  <div className="App">
    <Header/>
    <Main/>
    <Skills/>
    <Education/>
    <Works/>
    <Contacts/>
    <Footer/>
  </div>
  );
}

export default App
