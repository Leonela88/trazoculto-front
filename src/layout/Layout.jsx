import { Outlet } from "react-router"
import Header from "../components/organisms/Header"
import Footer from "../components/organisms/Footer"

const Layout = () => {
  return (
    <>
    <header><Header/></header>
    <main><Outlet/></main>
    <footer><Footer/></footer>
    </>
  )
}

export default Layout