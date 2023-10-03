import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Auth from './middlewaresComp/Auth';
import AppPageTemplate from './middlewaresComp/AppPageTemplate';
import Countries from './Pages/Countries';
import Exchange from './Pages/Exchange';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element:
      <Auth>
        <AppPageTemplate>
          <Homepage />
        </AppPageTemplate>
      </Auth>
    },
    {
      path: '/countries',
      element:
      <Auth>
        <AppPageTemplate>
          <Countries />
        </AppPageTemplate>
      </Auth>
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/register',
      element: <Register />
    },
    {
      path: '/exchange',
      element:
      <Auth>
        <AppPageTemplate>
          <Exchange />
        </AppPageTemplate>
      </Auth> 
    }
  ])



  return (
    <RouterProvider router={router} />
  );
}

export default App;
