import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { routes } from './routes'
import { Provider } from 'react-redux'
import { store } from './redux/store'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
const router = createBrowserRouter(routes)
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
