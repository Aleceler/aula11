import './App.css'
import {RouterProvider} from "react-router-dom";
import {routesConfig} from "../routes.tsx";

function App() {
  return (
    <>
        <RouterProvider router={routesConfig} />
    </>
  )
}

export default App
