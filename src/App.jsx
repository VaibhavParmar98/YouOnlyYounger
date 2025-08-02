import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header1 from './Components/Common/Header1'
import Header2 from './Components/Common/Header2'
import Home from './Pages/Home/Home'
// import ProfilePage from './Pages/Profile/ProfilePage'
import About from './Pages/About/About'
import PhysicalBody from './Pages/PhysicalBody/PhysicalBody'
import Contact from './Pages/Contact/Contact'
import Footer from './Components/Common/Footer'
import VitalBody from './Pages/VitalBody/VitalBody'
import MentalBody from './Pages/MentalBody/MentalBody'
import SuperMentalBody from './Pages/SuperMentalBody/SuperMentalBody'
import BlissBody from './Pages/BlissBody/BlissBody'


const App = () => {
  return (
    <>
      <BrowserRouter>
      <Header1/>
      <Header2/>
        <Routes>
          <Route path='/' element={<Home/>} />
          {/* <Route path='/profile' element={<ProfilePage/>} /> */}
          <Route path='/about' element={<About/>} />
           <Route path='/healing' element={<PhysicalBody/>} />
           <Route path='/vital-body' element={<VitalBody/>} />
           <Route path='/mental-body' element={<MentalBody/>} />
           <Route path='/super-mental-body' element={<SuperMentalBody/>} />
           <Route path='/bliss-body' element={<BlissBody/>} />
           <Route path='/contact' element={<Contact/>} />

           {/* TEST */}

        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
