import { loginStart, loginSuccess, loginFailure, logOut, getInfo } from './logSlice'


export const logout = (dispatch) => {
    localStorage.removeItem('token')
    dispatch(logOut())
}

export const userInfo = () => async (dispatch) => {
    const token = localStorage.getItem("token")
    console.log('test')

    const data = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: "POST",
        headers: {
            'Authorization' : `Bearer ${token}`
        }
    })

    const info = await data.json()
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
        const data = await reponse.json()
        console.log(data)
        dispatch(getInfo({
            username: info.body.userName,
            firstName: info.body.firstName,
            lastName: info.body.lastName
        }))
    }
}

export const checkLogIn = (dispatch) => {
    const token = localStorage.getItem('token')
    token ? dispatch(loginSuccess({token: token}), userInfo()) : dispatch(logOut())
}

export const loginUser = (email, password) => async (dispatch) => {

    try {
        dispatch(loginStart())

        const reponse = await fetch('http://localhost:3001/api/v1/user/login', {
            method: "POST",
            body: JSON.stringify({email, password}),
            headers: {
                "Content-Type": "application/json"
            }
        })
        if (reponse.status === 400) {
            throw new Error('Invalid credentials')
        }
        if (reponse.status === 200) {
            const data = await reponse.json()
            localStorage.setItem('token', data.body.token)

            dispatch(loginSuccess({ token: data.body.token }))
            dispatch(userInfo())
        }
        
    } catch(error) {
        dispatch(loginFailure(error.message))
    }
}

