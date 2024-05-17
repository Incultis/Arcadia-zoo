import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Services from './components/pages/Services';
import Connexion from './components/pages/Connexion';
import Contact from './components/pages/Contact';
import Habitats from './components/pages/Habitats';
import Accueil from './components/pages/Accueil';
import Dashboard from './components/pages/Dashboard';
import { loader } from './auth/sigin';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Accueil />
      },
      {
        path: "services",
        element: <Services />
      },
      {
        path: "habitats",
        element: <Habitats />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "connexion",
        element: <Connexion />,
        loader: loader
      },
      {
        path: "dashboard",
        element: <Dashboard />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
