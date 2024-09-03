import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Vote from './pages/vote.jsx';
import Budget from './pages/Budget.jsx';

const root = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    children: [
      {
        path:"/",
        element: <Home />,
      },
    ],
  },
  {
    path:"/vote",
    element: <Vote />,
  },
  {
    path:"/budget",
    element: <Budget />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={root}/>
  </StrictMode>,
)
