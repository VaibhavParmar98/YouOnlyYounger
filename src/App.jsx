import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Header2 from './Components/Header2'
import Profile from './Pages/ProfilePage'
import About from './Pages/About'
import PhysicalBody from './Pages/PhysicalBody'
import Booking from './Pages/Booking'
import Footer from './Components/Footer'
import Tools from './Components/Tools'

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Header2/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/about' element={<About/>} />
           <Route path='/healing' element={<PhysicalBody/>} />
           <Route path='/contact' element={<Booking/>} />

           {/* TEST */}

           <Route path='/test' element={<Tools/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
