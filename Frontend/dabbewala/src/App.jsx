import logo from './logo.svg';
import './App.css';
import Start from './pages/Start';
import {Routes,Route} from 'react-router-dom'
import UserLogin from './pages/UserLogin';
import UserSignUp from './pages/UserSignUp';
import Home from './pages/Home';
import UserProtectedWrapper from './pages/UserProtectedWrapper';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Start/>}/>
        <Route path='/login' element={<UserLogin/>}/>
        <Route path='/signup' element={<UserSignUp/>}/>
        <Route path='/home' element={
          <UserProtectedWrapper>
            <Home/>
          </UserProtectedWrapper>}/>
      </Routes>
    </div>
  );
}

export default App;
