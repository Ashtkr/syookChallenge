import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import PollResult from './components/PollResult';
import UserPoll from './components/UserPoll';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/userPoll' element={<UserPoll />} />
        <Route path='/pollResult' element={<PollResult />} />
      </Routes>
    </div>
  );
}

export default App;
