import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { store } from './redux/Store'
import Rout from './Router'


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}> 
      <Rout />
    </Provider>
  </React.StrictMode>,
)
