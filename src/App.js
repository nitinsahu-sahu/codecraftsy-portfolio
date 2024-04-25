import { Route, Routes } from 'react-router-dom';
import './App.css';
import { About, ContactUs, Home, Services } from './components';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Services />} />
      </Routes>
    </div>
  );
}

export default App;
