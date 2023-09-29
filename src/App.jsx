import Nabvar from './components/Navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './views/home/Home'
import Opensource from './views/opensource/OpenSource'
import Explorer from './views/explorer/Explorer' 
import Hireprogrammer from './views/hireprogrammer/HireProgrammer'
import Register from './views/register/Register'
import Login from './views/login/Login'
import {Routes, Route} from "react-router-dom"
import './App.css'

const App=()=> {

  return (
    <> <Nabvar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/open-source' element={<Opensource/>}/>
      <Route path='/explorer' element={<Explorer/>}/>
      <Route path='/hire-programmer' element={ <Hireprogrammer/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
        
      </Routes>  <Footer/>    
    </>
  )
}

export default App
