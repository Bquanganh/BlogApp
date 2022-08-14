import TopBar from "./components/topnar/Topbar";
import HomePage from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Setting";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";

function App(){
    const {user} = useContext(Context);
    return(
        <Router>
            <TopBar />
            <Routes>
               <Route exact path="/" element={<HomePage/>}></Route>
               <Route path="/register"  element={user ? <HomePage/>:<Register />}></Route> 
               <Route path="/login" element= {user ? <HomePage/>:<Login/>}></Route>
               <Route path="/write" element= {user ? <Write/>:<HomePage/>}></Route>
               <Route path="/settings" element={user ? <Settings/>:<Register/>}></Route>
               <Route path="/post/:postId" element= {<Single/>}>      </Route>
            </Routes>
        </Router>   
    )
}
export default App;