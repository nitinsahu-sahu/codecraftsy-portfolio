import { Route, Routes } from 'react-router-dom';
import './App.css';
import { About, ContactUs, Footer, Home,  NavBar,  Services } from './components';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
