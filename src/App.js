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
import UserView from "./View/User/view";
import NewMatch from "./View/Match/new";
import ReqListPlayers from "./View/Players/requstplayer";
import ReqListPlayersAdmin from "./View/Players/requstplayeradmin";
import ManagerView from "./View/Manager/view";


function App() {
  let location = useLocation();
  return (
    <>
      <div className="flex w-full bg-gray-50">
      {location.pathname === "/login"    || location.pathname === "/Signup" || 
   location.pathname.startsWith("/view") 
   || location.pathname.startsWith("/manager")
       ? null : <NavBar />}
        <div className="flex flex-col w-full">
        {location.pathname === "/login" 
        || location.pathname === "/Signup" || 
        location.pathname.startsWith("/view") 
        || location.pathname.startsWith("/manager")
         ? null : <AppBar />}
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/users" element={<ListUsers />} />
            <Route path="/Players" element={<ListPlayers />} />
            <Route path="/MStadium" element={<ListMStadium />} />
            <Route path="/stadium" element={<ListStadium />} />
            <Route path="/user" element={<ListUserStadium />} />
            <Route path="/view" element={<UserView />} />
            <Route path="/view/stadium/:id" element={<NewMatch />} />
            <Route path="/" element={<ListMatch />} />
            <Route path="/Match" element={<ListMatch />} />
            <Route path="/manager" element={<ManagerView />} />
            <Route path="/RequstPlayer" element={<ReqListPlayersAdmin />} />
          </Routes>
        </div>
      </div>{" "}
    </>
  );
}

export default App;
