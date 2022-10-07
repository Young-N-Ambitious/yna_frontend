import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {HomePage, AboutUs, ContactUs, JoinUs, Members, Login, NotFound} from './pages'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<HomePage/>} />
        <Route exact path='/about-us' element={<AboutUs/>} />
        <Route exact path='/members' element={<Members/>} />
        <Route exact path='/contact-us' element={<ContactUs/>} />
        <Route exact path='/join-us' element={<JoinUs/>} />
        <Route exact path='/login' element={<Login/>} />

        {/* The Below Route is for 404 #PageNotFound, Make sure to Place this route at the end of all Route [if want to add other Route, add Route above 404 Route] */}
        <Route path="*" element={<NotFound />} />
      </Routes>

    </BrowserRouter>

  );
}

export default App;
