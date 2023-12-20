import HeaderNav from '../../components/HeaderNav/HeaderNav'
import Footer from '../../components/Footer/Footer'
import UserTitle from '../../components/UserTitle/UserTitle'
import Account from '../../components/account/Account'
import { useStore } from 'react-redux'
import './User.scss'

function User () {

    const Store = useStore()

    return <>
        <HeaderNav />
        <main className='bg-dark'>
            <UserTitle />
            <h2 className="sr-only">Accounts</h2>
            {
                Store.getState().accounts.map(
                    (item, index) => <Account key={index} info={item} />
                )
            }
        </main>
        <Footer />
    </>
}

export default User