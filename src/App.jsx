import './App.css'
import { Home, Websites, Games, Services, AboutUs} from './pages'
import { Navbar, Foot} from './components'
import { Outlet } from "react-router-dom";


function App() {

  
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default App
