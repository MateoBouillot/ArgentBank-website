import Btn from '../btn/Btn'
import './Form.scss'

function Form () {
    const infoBtn = {
        label:'Sign In',
        classname:'sign-in__btn',
        link:'/user'
    }

    return <main className="bg-dark">
    <section className="sign-in">
      <i className="fa fa-user-circle sign-in__icon"></i>
      <h1>Sign In</h1>
      <form>
        <div className="sign-in__wrapper">
          <label htmlFor="username" className='sign-in__wrapper__label'>Username</label
          ><input type="text" id="username" className='sign-in__wrapper__input'/>
        </div>
        <div className="sign-in__wrapper">
          <label htmlFor="password" className='sign-in__wrapper__label'>Password</label
          ><input type="password" id="password" className='sign-in__wrapper__input'/>
        </div>
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