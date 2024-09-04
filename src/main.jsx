import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Budget from './pages/Budget.jsx';
import AboutUs from './pages/AboutUs.jsx';
import ContactUs from './pages/ContactUs.jsx';
import WalletProvider from './contex/WalletContextProvider.jsx';
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import { rootstockTestnet } from 'wagmi/chains';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";
import Loans from './pages/Loans.jsx';

const config = getDefaultConfig({
  appName: 'Fineace',
  projectId: 'fc46a95e1edcd6b90af30fe257ab28be',
  chains: [rootstockTestnet],
  ssr: false, // If your dApp uses server side rendering (SSR)
});

const root = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    path: "/budget",
    element: <Budget />,
  },
  {
    path: "/contact-us",
    element: <ContactUs />,
  },
  {
    path: "/loans",
    element: <Loans />,
  },
]);

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <WagmiProvider config={config}>
    <QueryClientProvider client={queryClient}>
      <RainbowKitProvider>
        <StrictMode>
          <WalletProvider>
            <RouterProvider router={root} />
          </WalletProvider>
        </StrictMode>
      </RainbowKitProvider>
    </QueryClientProvider>
  </WagmiProvider>
)
