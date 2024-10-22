import {createBrowserRouter} from "react-router-dom";
import Payment from "./src/views/payment";

export const routesConfig = createBrowserRouter([{
    path: "/payments",
    element: <Payment />
}])