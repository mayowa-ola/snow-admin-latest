import { createBrowserRouter, RouterProvider, Outlet  } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Artist from './Pages/Artist/Artist'
import Transactions from './Pages/Transactions/Transactions'
import Login from './Pages/Login/Login'
import Curators from './Pages/Curators/Curators'
import Products from './Pages/Products/Products'
import Allusers from './Pages/Allusers/Allusers'
import Navbar from './Components/Navbar/Navbar'
import Menu from './Components/Menu/Menu'
import './styles/global.scss'
import Footer from './Components/Footer/Footer'









function App() {


  const Layout = () => {
    return (
      <div className="main">
        <Navbar/>
        <div className="container">
          <div className="menuContainer">
            <Menu/>
          </div>
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
  

  const router = createBrowserRouter([

    {
      path:'/',
      element:<Layout/>,
      children:[
       
        {
          path: '/',
          element: <div><Home/></div>
        },
       
        {
          path: '/allusers',
          element: <div><Allusers/></div>
        },
        {
          path: '/artist',
          element: <div><Artist/></div>
        },
        {
          path: '/curators',
          element: <div><Curators/></div>
        },
        {
          path: '/products',
          element: <div><Products/></div>
        },
        {
          path: '/transaction',
          element: <div><Transactions/></div>
        },
      ],
    },
    {
      path: '/login',
      element: <div><Login/></div>
    },
   
  ])
  

  return (
    <div className='App'>
      <RouterProvider router={router}/>
    </div>
      
  
  )
}

export default App
