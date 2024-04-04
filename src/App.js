import logo from './logo.svg';
import './App.css';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from'./components/Home';
import Register from './components/Register';
import Login from './components/Login';
import { UserHome } from './components/UserHome';


function App() {
  return (
    <div className="App">
      
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/register' element={<Register></Register>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/userhome' element={<UserHome></UserHome>}></Route>
    </Routes>

    </div>
  );
}

export default App;
