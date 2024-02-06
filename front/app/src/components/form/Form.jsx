import Btn from '../btn/Btn'
import './Form.scss'
import {useState} from 'react'
import {loginUser} from '../../redux/logThunk'
import {useDispatch, useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'


function Form () {
    const infoBtn = {
        label:'Sign In',
        classname:'sign-in__btn',
    }
    const dispatch = useDispatch()
    const {error} = useSelector((state) => state.log)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
      e.preventDefault()
      dispatch(loginUser(email, password, navigate))
    }

    return <main className="bg-dark">
    <section className="sign-in">
      <i className="fa fa-user-circle sign-in__icon"></i>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit} >
        <div className="sign-in__wrapper">
          <label htmlFor="username" className='sign-in__wrapper__label'>Username</label
          ><input type="text" id="username" className='sign-in__wrapper__input' onChange={
            (e) => {setEmail(e.target.value)}} />
        </div>
        <div className="sign-in__wrapper">
          <label htmlFor="password" className='sign-in__wrapper__label'>Password</label
          ><input type="password" id="password" className='sign-in__wrapper__input' onChange={
            (e) => {setPassword(e.target.value)}} />
        </div>
        {error !== null?
            <p className='error'>{error}</p>: <></>
        }
        <div className="sign-in__remember">
          <input type="checkbox" id="remember-me" /><label htmlFor="remember-me" className='sign-in__remember__label'
            >Remember me</label
          >
        </div>
        <Btn props={infoBtn} />
      </form>
    </section>
  </main>
  }


    


export default Form