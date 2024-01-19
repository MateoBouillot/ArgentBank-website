import { loginStart, loginSuccess, loginFailure, logOut } from './logSlice'


export const logout = (navigate) => (dispatch) => {
    localStorage.clear()
    dispatch(logOut())
    navigate('/')
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

