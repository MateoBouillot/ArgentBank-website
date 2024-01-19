import './HeaderNav.scss'
import logo from '../../assets/argentBankLogo.webp'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import {useStore, useDispatch, useSelector} from 'react-redux'
import { checkLogIn, logout } from '../../redux/logThunk'

function HeaderNav () {
    const dispatch = useDispatch()
    const store = useStore()
    const navigate = useNavigate()
    const authToken = localStorage.getItem('token')

    // const { username } = useSelector((state) => state.log)

    dispatch(checkLogIn)

    const handleClick = () => {
        dispatch(logout(navigate))
    }

    // useEffect(() => {
    //     if (authToken !== null && username === null) {
    //       dispatch(getInfo())
    //     }
    //   }, [dispatch, authToken, username])

    return <nav className="navbar">
        <Link to='/' className="navbar__logo" >
            <img className="navbar__logo__image" src={logo} alt="Argent Bank Logo"/>
            <h1 className="sr-only">Argent Bank</h1>
        </Link>
        {store.getState().loggedIn === true ?
        <div className='navbar__items'><Link to='/User' className='navbar__item'>
            <i className="fa fa-user-circle"></i> 
            {store.getState().username || localStorage.getItem('username')}
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