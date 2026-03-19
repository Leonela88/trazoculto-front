import { Link } from "react-router"

const Header = () => {
  return (
   <>
   <Link to ="/">Home</Link>
   <Link to ="/services">Services</Link>
   <Link to ="/contact">Contact</Link>
   <Link to ="/sesion">Sesion</Link>
   
   </>
  )
}

export default Header