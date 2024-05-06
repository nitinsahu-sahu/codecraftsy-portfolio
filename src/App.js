import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer, Home,  NavBar} from './components';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
