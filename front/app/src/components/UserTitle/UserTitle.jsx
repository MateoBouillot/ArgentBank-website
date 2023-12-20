import Btn from '../btn/Btn'
import './UserTitle.scss'

function UserTitle () {
    const infoBtn = {
        label: 'Edit Name',
        classname: 'header__edit-btn',
        link: '/User'
    }

    return <div className="header">
    <h1>Welcome back<br />Tony Jarvis!</h1>
    <Btn props={infoBtn} />
  </div>
}

export default UserTitle