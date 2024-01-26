import './HeaderNav.scss'
import logo from '../../assets/argentBankLogo.webp'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { checkLogIn, logout } from '../../redux/logThunk'
import { getInfo } from '../../redux/infoSlice'

function HeaderNav () {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const authToken = localStorage.getItem('token')
    const user = localStorage.getItem('user')

    const { userName } = useSelector((state) => state.info)
    const { loggedIn } = useSelector((state) => (state.log))

    
    const handleClick = () => {
        dispatch(logout(navigate))
    }

    useEffect(() => {
        dispatch(checkLogIn)
        if (authToken !== null && userName === null) {
          dispatch(getInfo({
            userName: user[0],
            firstName: user[1],
            lastName: user[2]
        }))
        }
      }, [dispatch, authToken, userName])

    return <nav className="navbar">
        <Link to='/' className="navbar__logo" >
            <img className="navbar__logo__image" src={logo} alt="Argent Bank Logo"/>
            <h1 className="sr-only">Argent Bank</h1>
        </Link>
        {loggedIn === true ?
        <div className='navbar__items'><Link to='/User' className='navbar__item'>
            <i className="fa fa-user-circle"></i> 
            {userName}
        </Link>
        <Link to='/' className='navbar__item' onClick={handleClick}>
            <i className="fa fa-sign-out"></i>
            Sign Out
        </Link></div>
        : 
        <Link to='/Sign-in' className="navbar__item" >
            <i className="fa fa-user-circle"></i> 
            Sign In
        </Link>
        }   
    </nav>
}

export default HeaderNav