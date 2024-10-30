import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import {HomePage} from "../pages/HomePage/HomePage";
import {SecondPage} from "../pages/SecondPage/SecondPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <HomePage/>,
            },
            {
                path: "second",
                element: <SecondPage/>,
            }
        ]
    }
]);
