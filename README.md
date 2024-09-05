

# Fineace

Fineace is a modern decentralized application (dApp) built using **React**, **Vite**, and **Hardhat**, providing seamless integration with blockchain technology through tools like **RainbowKit** and **wagmi**. The project is a complete solution for creating, testing, and deploying Ethereum smart contracts.

## Features

- **React with Vite**: Fast builds and Hot Module Replacement (HMR) for React development.
- **Tailwind CSS**: For styling, with custom fonts, colors, and images.
- **Smart Contract Integration**: Using **Hardhat** for Ethereum-based contracts.
- **Wallet Support**: RainbowKit integration for wallet connection.

## Installation

### Prerequisites

Ensure you have Node.js and npm installed.

### Clone the Repository

```bash
git clone https://github.com/Yunusabdul38/fineace.git
cd fineace
```

### Install Dependencies

```bash
npm install
```

### Run Locally

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

## Project Structure

```bash
fineace/
├── abis/                  # ABI files for smart contracts
├── assets/                # Static assets (images, etc.)
├── components/            # Reusable React components
├── contracts/             # Solidity smart contracts
├── hooks/                 # Custom React hooks
├── pages/                 # React page components
├── services/              # API and blockchain interaction services
├── utils/                 # Utility functions
├── tests/                 # Smart contract tests
└── src/                   # Main React source code
```

## Smart Contracts

### Compilation

```bash
npx hardhat compile
```

### Testing

```bash
npx hardhat test
```

### Deployment

```bash
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Lock.ts
```

## Technologies Used

- **React**: For building interactive UI.
- **Vite**: Modern frontend tool with fast builds.
- **Tailwind CSS**: For utility-based styling.
- **Hardhat**: Ethereum development environment for compiling, deploying, and testing contracts.
- **wagmi & RainbowKit**: For Web3 wallet connections and blockchain interactions.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more information.





# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
