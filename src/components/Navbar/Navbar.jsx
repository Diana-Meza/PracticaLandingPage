import { NavLink } from "react-router-dom"
import logo from "../../assets/logo.png"
import "./navbar.css" 

const Nabvar = ()=> {
    return(
      <div className="navcontenedor">
        <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <NavLink className="navbar-brand ms-3" to="/">
      <img src={logo} alt="Logo" style={{width:"5em"}}/>
    </NavLink>
   
    <div className="row">
      <div className="col-sm-8"></div>
    </div>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="d-flex" style={{color:"white"}}>
        <NavLink className="nav-link active ms-5 me-3" aria-current="page" to="/open-source">Open source</NavLink>
        <NavLink className="nav-link active me-3" aria-current="page" to="/explorer">Explorer</NavLink>
        <NavLink className="nav-link active me-3" aria-current="page" to="/hire-programmer">Hire Programmer</NavLink>
        
        </div>
    </div> 
    <div className="d-flex mx-auto">
      <NavLink className="nav-link active me-3" aria-current="page" to="/login">Login</NavLink>
    <NavLink className="nav-link active me-5" aria-current="page" to="/register">Register</NavLink>
    </div>
    
    
    <button className="navbar-toggler d-md-none d-sm-flex btn bg-secondary"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" >
      <span className="navbar-toggler-icon"></span>
    </button>
  </div>

  
</nav>
</div>
    )
} 
export default Nabvar