import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Homepage from './pages/Homepage/Homepage'
import Login from './pages/Login/Login'

function Rout() {


    const router = createBrowserRouter([
        {
            path: '/',
            element: <Homepage />
        },
        {
            path: '/Sign-in',
            element: <Login />
        }
    ])
    return <RouterProvider router={router} />
}

export default Rout