import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"

function App() {
  return (
    <div className="App">
 <BrowserRouter>
 <nav>
  <Link to="/">Login</Link>
  <Link to="/SignUp">SignUp</Link>
 </nav>
 <Routes>
  <Route path="/"element={<Login></Login>}></Route>
  <Route path="/SignUp" element={<SignUp></SignUp>}></Route>
 </Routes>
 </BrowserRouter>




      
      
      

    </div>
  );
}

export default App;
