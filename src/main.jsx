import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Vote from './pages/vote.jsx';
import Budget from './pages/Budget.jsx';
import AboutUs from './pages/AboutUs.jsx';
import ContactUs from './pages/ContactUs.jsx';
import  WalletProvider  from './contex/WalletContextProvider.jsx';

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
    path:"/about-us",
    element: <AboutUs />,
  },
  {
    path:"/budget",
    element: <Budget />,
  },
  {
    path:"/contact-us",
    element: <ContactUs />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WalletProvider>
      <RouterProvider router={root}/>
    </WalletProvider>
  
  </StrictMode>,
)
