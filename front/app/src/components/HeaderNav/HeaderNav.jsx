import './HeaderNav.scss'
import logo from '../../assets/argentBankLogo.png'
import { Link } from 'react-router-dom'


function HeaderNav () {


    return <nav className="navbar">
    <Link to='/' className="navbar__logo" >
      <img className="navbar__logo__image" src={logo} alt="Argent Bank Logo"/>
      <h1 className="sr-only">Argent Bank</h1>
    </Link>
    <Link to='/Sign-in' className="navbar__item" >
      <i className="fa fa-user-circle"></i>
      Sign In
    </Link>
  </nav>
}

export default HeaderNav