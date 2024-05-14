import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './app/store.js'
import App from './App.jsx'
import 'utils/firebase.js';
import "./main.css"

const domNode = document.getElementById('root')
const root = createRoot(domNode)

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)
