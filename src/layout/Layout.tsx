import { Outlet } from "react-router"
import Header from "../components/organisms/Header/Header"
import Footer from "../components/organisms/Footer/Footer"

const Layout: React.FC = () => {
  return (
    <>
    <header><Header/></header>
    <main><Outlet/></main>
    <footer><Footer/></footer>
    </>
  )
}

export default Layout;
