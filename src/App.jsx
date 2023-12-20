
import './App.css'
import Form from './Componentes/Form'
import Home from './Componentes/Home'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import AuthContextProvider from "./context/AuthContext"

function App() {
  

  return (
    <>
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
        
        <Route path="/" element={<Form/>}/>
        <Route path="/home" element={<Home/>}/>
        
        </Routes>
      </BrowserRouter>
      </AuthContextProvider>
    </>
  )
}

export default App
