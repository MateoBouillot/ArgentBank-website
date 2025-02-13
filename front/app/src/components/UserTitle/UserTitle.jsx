import { useStore, useDispatch, useSelector } from 'react-redux'
import './UserTitle.scss'
import { useState } from 'react'
import { changeUsername } from '../../redux/infoThunk'

function UserTitle () {
    const [form, setForm] = useState(false)
    const store = useStore()
    const {userName} = useSelector((state) => state.info)
    const [username, setUsername] = useState(userName)
    const dispatch = useDispatch()

    const openForm = () => {
        setForm(true)
    }

    const handleChange = (e) => {
        setUsername(e.target.value)
    }

    const closeForm = () => {
        setForm(false)
    }

    const saveName = () => {
        dispatch(changeUsername(username))
        setForm(false)
        
    }

    return <div className="header">
    {form? 
        <><h2>Edit User info</h2>
        <form className='header__form'>
            <label htmlFor='username' className='header__form__label'>User Name</label>
            <input type='text' className='header__form__input' id='username' value={username} onChange={handleChange}/>
        </form>
        <div className='header__btns'>
            <button className='header__btns__btn' onClick={saveName}>Save</button>
            <button onClick={closeForm} className='header__btns__btn'>Cancel</button>
        </div>
        </>
        :
        <><h2>Welcome back<br />{store.getState().username || localStorage.getItem('username')}</h2>
        <button className="header__edit-btn" onClick={openForm} >Edit Name</button></>
        }
  </div>
}

export default UserTitle