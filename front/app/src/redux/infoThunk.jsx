import { getInfo } from "./infoSlice";

export const userInfo = () => async (dispatch) => {
    const token = localStorage.getItem("token")

    const data = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: "POST",
        headers: {
            'Authorization' : `Bearer ${token}`
        }
    })

    const info = await data.json()
    localStorage.setItem('user', [
        info.body.userName,
        info.body.firstName,
        info.body.lastName
    ])
    localStorage.setItem('lastName', info.body.lastName)
    localStorage.setItem('username', info.body.userName)

    dispatch(getInfo({ 
        userName: info.body.userName,
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
            userName: data.body.userName,
            firstName: data.body.firstName,
            lastName: data.body.lastName
        }))
    }
}