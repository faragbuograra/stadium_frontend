import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import AppBar from "./Components/AppBar/AppBar";
import { Route, Routes, useLocation } from "react-router-dom";

import Login from "./View/Login/login";
import ListUsers from "./View/Users/list";
import ListPlayers from "./View/Players/list";
import ListStadium from "./View/Stadium/list";
import ListMatch from "./View/Match/list";
import ListMStadium from "./View/MdStadium/list";
import Signup from "./View/Signup/login";
import ListUserStadium from "./View/Stadium/userlist";


function App() {
  let location = useLocation();
  return (
    <>
      <div className="flex w-full bg-gray-50">
      {location.pathname === "/login"    || location.pathname === "/Signup" || 
      location.pathname === "/user" 
       ? null : <NavBar />}
        <div className="flex flex-col w-full">
        {location.pathname === "/login" 
        || location.pathname === "/Signup" || 
        location.pathname === "/user" 
         ? null : <AppBar />}
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/users" element={<ListUsers />} />
            <Route path="/Players" element={<ListPlayers />} />
            <Route path="/MStadium" element={<ListMStadium />} />
            <Route path="/stadium" element={<ListStadium />} />
            <Route path="/user" element={<ListUserStadium />} />
            <Route path="/Match" element={<ListMatch />} />
          </Routes>
        </div>
      </div>{" "}
    </>
  );
}

export default App;