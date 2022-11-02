import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Attendance from './components/Attendance';
import CreateRequest from './components/CreateRequest';
import LeaveRequest from './components/LeaveRequest';
import DailyStatusUpdate from './components/DailyStatusUpdate';
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";


function App() {
  return (
    <div className="App">
 <BrowserRouter>
 <nav>
  <Link to="/">Loginn</Link>
  <Link to="/SignUp">SignUp</Link>
  <Link to="/Attendance">Attendance</Link>
  <Link to="/Create Request">Create a Request</Link>
  <Link to="/Leave Request">Leave Request</Link>
  <Link to="/Daily Status Update">Daily Status Update</Link>
 </nav>
 <Routes>
  <Route path="/"element={<Login></Login>}></Route>
  <Route path="/SignUp" element={<SignUp></SignUp>}></Route>
  <Route path="/Attendance" element={<Attendance></Attendance>}></Route>
  <Route path="/Create Request" element={<CreateRequest></CreateRequest>}></Route>
  <Route path="/Leave Request" element={<LeaveRequest></LeaveRequest>}></Route>
  <Route path="/Daily Status Update" element={<DailyStatusUpdate></DailyStatusUpdate>}></Route>
 </Routes>
 </BrowserRouter>




      
      
      

    </div>
  );
}

export default App;
