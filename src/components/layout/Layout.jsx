import { Fragment } from "react"
import { Outlet } from "react-router-dom"
import Footer from "../footer/Footer"
import Header from "../header/Header"


const Layout = () => {
  return (
    <Fragment>
        <Header/>
        <main>
            <div className="conatiner">
                <Outlet/>
            </div>
        </main>
        <Footer/>
    </Fragment>
  )
}

export default Layout