
import './App.css'
import Nav from './components/Nav'
import Home from './pages/Home'
import Cart from './pages/Cart'
import {Routes} from "react-router-dom"
import {Route} from "react-router-dom"

function App() {
  

  return (
    <>
     <div><Nav/></div> 
     
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route/>
     </Routes>
    </>
  )
}

export default App
