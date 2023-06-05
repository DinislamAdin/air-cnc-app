import { Outlet } from "react-router-dom"
import Navbar from "../components/Sheard/Navbar/Navbar"
import Footer from "../components/Sheard/Footer/Footer"

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
     <div className="pt-28 pb-20">
        <Outlet></Outlet>
     </div>
     <Footer></Footer>
    </div>
  )
}

export default Main
