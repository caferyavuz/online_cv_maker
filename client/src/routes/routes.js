import { createBrowserRouter } from 'react-router-dom'

import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import Services from '../pages/Services/Services'
import Skills from '../pages/Skills/Skills'
import Education from '../pages/Education/Education'
import Experiance from '../pages/Experience/Experience'
import Portfolio from '../pages/Portfolio/Portfolio'
import Contact from '../pages/Contact/Contact'
import NotFoundPage from '../pages/ErrorPage/NotFound/NotFoundPage'
import Sidebar from '../components/Sidebar/Sidebar'
import Experience from '../pages/Experience/Experience'

const routes = createBrowserRouter([
    {
        path:'/',
        element: <Login/>,
        errorElement: <NotFoundPage/>,
    },
    {
        path:'/login',
        element: <Login/>,
    },
    {
        path:'/register',
        element: <Register/>,
    },
    {
        path:'/profile/default-user',
        element: <Home/>,
    },
    {
        path:'/profile/default-user/home',
        element: <Home/>,
    },
    {
        path:'/profile/default-user/about',
        element: <About/>
    },
    {
        path:'/profile/default-user/services',
        element: <Services/>
    },
    {
        path:'/profile/default-user/skills',
        element: <Skills/>
    },
    {
        path:'/profile/default-user/education',
        element: <Education/>
    },
    {
        path:'/profile/default-user/experiance',
        element: <Experiance/>
    },
    {
        path:'/profile/default-user/portfolio',
        element: <Portfolio/>
    },
    {
        path:'/profile/default-user/contact',
        element: <Contact/>
    },
    {
        path:'/sidebar',
        element: <Sidebar/>
    },
]);

export default routes;