import { BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "../Pages/Home"
import About from "../Pages/About"
import Profile from "../Pages/Profile"

function AppRouter() {
  return (
    <div>
 <BrowserRouter>
 <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/Profile" element={<Profile/>} />
 </Routes>
 </BrowserRouter>

    </div>
  )
}

export default AppRouter
