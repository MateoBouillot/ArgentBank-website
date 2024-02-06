import HeaderNav from '../../components/HeaderNav/HeaderNav'
import Footer from '../../components/Footer/Footer'
import Form from '../../components/form/Form'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {

    const Navigate = useNavigate()
    const { loggedIn } = useSelector((state) => (state.log))

    useEffect(() => {
        if (loggedIn === true) {
        Navigate('/User')
    }
    })

    return <>
        <HeaderNav />
        <Form />
        <Footer />
    </>
}

export default Login