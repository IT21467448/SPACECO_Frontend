import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/login/SignUp";
import Mars from "./pages/mars/Mars";
import Earth from "./pages/earth/Earth";
import Earth1 from "./pages/earth/Earth1";
import InitialPage from "./pages/initialpage/InitialPage";

function App() {
  

  return (
    <div className="App">
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<InitialPage/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path='/mars' element={<Mars/>}/>
      <Route path="/resources" element={<Earth/>}/>
      <Route path="/earth" element={<Earth1/>}/>
      <Route path="/home" element={<Home/>}/>
    </Routes>
  </BrowserRouter>
     
   
    </div>
  );
}

export default App;
