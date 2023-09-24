
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { UseLoader } from './Api/UseLoader';
import './App.css';
import About from './Components/About/About';
import Inventory from './Components/Inventory/Inventory';
import Order from './Components/Order/Order';
import Shop from './Components/Shop/Shop';
import Main from './layouts/Main';
import SignIn from './Components/LogIn/SignIn';
import SignUp from './Components/signup/SignUp';
import Shipping from './Components/Shipping/Shipping';
import PrivateRoute from './routes/PrivateRoute';
const router=createBrowserRouter([
  {path:'/',element:<Main></Main>,children:[
    {path:'/',element:<Shop></Shop>},
    {path:'/order',loader:UseLoader,element:<Order></Order>},
    {path:'/about',element:<About></About>},
    {path:'inventory',element:<PrivateRoute><Inventory></Inventory></PrivateRoute>},
    {path:'shipping',element:<PrivateRoute><Shipping></Shipping></PrivateRoute>},
    {path:'signin',element:<SignIn></SignIn>},
    {path:'signup',element:<SignUp></SignUp>}
  ]}
])

function App() {
  return (
    <div >
    
    <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
