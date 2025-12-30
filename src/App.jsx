import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Header from './Directives/Header.jsx'
import Homepage from './Page/Home.jsx'
import Footer from './Directives/Footer.jsx'

function App() {

  return (
    <>
      <BrowserRouter>
      <Header /> 
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
      <Footer /> 
    </BrowserRouter>
    </>
  )
}

export default App
