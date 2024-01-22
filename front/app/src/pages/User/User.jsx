import HeaderNav from '../../components/HeaderNav/HeaderNav'
import Footer from '../../components/Footer/Footer'
import UserTitle from '../../components/UserTitle/UserTitle'
import Account from '../../components/account/Account'
import { useStore } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import './User.scss'
import { Account1, Account2, Account3 } from '../../assets/List'

function User () {

    const accounts = [
        Account1,
        Account2,
        Account3
    ]
    const Store = useStore()
    const navigate = useNavigate()


    if (Store.getState().loggedIn === false) {
        console.log('test')
        navigate('/')
    }

    return <>
        <HeaderNav />
        <main className='bg-dark'>
            <UserTitle />
            <h2 className="sr-only">Accounts</h2>
            {
                accounts.map(
                    (item, index) => <Account key={index} info={item} />
                )
            }
        </main>
        <Footer />
    </>
}

export default User