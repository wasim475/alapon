import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route
} from "react-router-dom";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Forgotpassword from "./pages/Forgotpassword";
import Home from "./pages/Home";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Message from "./pages/Message";
import RootLayout from "./components/RootLayout";
import Setting from "./pages/Setting";
import Notifications from "./pages/Notifications";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Registration/>}></Route> 
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/forgotpassword" element={<Forgotpassword/>}></Route>
      <Route path="/alapon" element={<RootLayout/>}>
        <Route path="home" element={<Home/>}></Route>
        <Route path="msg" element={<Message/>}></Route>
        <Route path="notifications" element={<Notifications/>}></Route>
        <Route path="settings" element={<Setting/>}></Route>
      </Route>
    </>
  )
);

function App() {
 
  return (
    <>
       <RouterProvider router={router} />
       <ToastContainer
            position="top-center"
            autoClose={3000}
            limit={1}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
        />
    </>
    
  )
}

export default App
