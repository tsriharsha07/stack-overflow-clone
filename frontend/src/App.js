import './App.css';
import { Route, BrowserRouter as Router,Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Login from './Pages/Auth/Login';
import Questions from './Pages/Questions/Questions';
import AskQuestion from './Pages/AskQuestions/AskQuestion';
import DisplayQuestion from './Pages/Questions/DisplayQuestion';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/questions' element={<Questions/>}/>
          <Route path='/askquestion' element={<AskQuestion/>}/>
          <Route path='/questions/:id' element={<DisplayQuestion/>}/>
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
