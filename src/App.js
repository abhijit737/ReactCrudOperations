
import './App.css';
import Home from './componenets/Home';
import Add from './componenets/Add';
import Edit from './componenets/Edit';
import {BrowserRouter as Router,Route,Routes}from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <div style={{ margin: "10rem" }} className='bg-danger text-light d-grid gap-2'><h1>Employees Crud Operation</h1></div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/create" element={<Add/>}/>
          <Route path="/edit" element={<Edit/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
