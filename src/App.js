import './App.css';
import {Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";

import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
