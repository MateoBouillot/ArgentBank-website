import { loginStart, loginSuccess, loginFailure, logOut, getInfo } from './logSlice'


export const logout = (navigate) => (dispatch) => {
    localStorage.clear()
    dispatch(logOut())
    navigate('/')
}

export const userInfo = () => async (dispatch) => {
    const token = localStorage.getItem("token")

    const data = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: "POST",
        headers: {
            'Authorization' : `Bearer ${token}`
        }
    })

    const info = await data.json()
    localStorage.setItem('firstname', info.body.firstName)
    localStorage.setItem('lastName', info.body.lastName)
    localStorage.setItem('username', info.body.userName)

    dispatch(getInfo({ 
        username: info.body.userName,
        firstName: info.body.firstName,
        lastName: info.body.lastName
    }))
}

export const changeUsername = (username) => async(dispatch) => {
    const token = localStorage.getItem("token")
    const name = {
        userName: username
    }
    const answer = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'PUT',
        body: JSON.stringify(name),
        headers: {
            "Content-Type": "application/json",
            'Authorization' : `Bearer ${token}`
        }
    })
    if (answer.status === 200) {
        const data = await answer.json()
        localStorage.setItem('username', data.body.userName)
        dispatch(getInfo({
            username: data.body.userName,
            firstName: data.body.firstName,
            lastName: data.body.lastName
        }))
    }
}

export const checkLogIn = async (dispatch) => {
    const token = localStorage.getItem('token')
    if (token != null) {
        dispatch(loginSuccess({token: token}))
        dispatch(userInfo())
    } else {
        dispatch(logOut())
    }
}

export const loginUser = (email, password, navigate) => async (dispatch) => {

    try {
        dispatch(loginStart())

        const answer = await fetch('http://localhost:3001/api/v1/user/login', {
            method: "POST",
            body: JSON.stringify({email, password}),
            headers: {
                "Content-Type": "application/json"
            }
        })
        if (answer.status === 400) {
            throw new Error('Invalid credentials')
        }
        if (answer.status === 200) {
            const data = await answer.json()
            localStorage.setItem('token', data.body.token)

            dispatch(loginSuccess({ token: data.body.token }))
            await dispatch(userInfo())
            await navigate('/user')
        }
        
    } catch(error) {
        dispatch(loginFailure(error.message))
    }
}

