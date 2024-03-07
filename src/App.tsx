
import './App.css'
import SignIn from './components/SingIn'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import SignUp from './components/Register'


function App() {

  const router = createBrowserRouter([{
    path: "/",
    element: <div><SignIn /></div>
  }
, 
{
  path: "/sign-up",
  element: <div><SignUp /></div>
}
])
  return (
    <RouterProvider router={router} />
  )
}

export default App
