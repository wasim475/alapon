import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route
} from "react-router-dom";
import Registration from "./pages/Registration";
import Login from "./pages/Login";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Registration/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
    </>
  )
);

function App() {
 
  return (
    <>
       <RouterProvider router={router} />
    </>
    
  )
}

export default App
