import ReactDOM from 'react-dom/client';
import {RouterProvider} from "react-router-dom";
import {router} from "./App/AppRouter";
import "@radix-ui/themes/styles.css";
import './shared/assets/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <RouterProvider router={router}/>
);

