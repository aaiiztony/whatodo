import { useContext, useState } from 'react';
import { Home, Navbar, WalletConnect } from './Components';
import './index.css';
import {ThemeContext} from './context/ThemeContext';
import { WagmiConfig } from 'wagmi';
import { config } from './contracts/wagmi';

const App = () => {
  const theme = useContext(ThemeContext);
  const [connected, setConnected] = useState<Boolean>(false);
  return (
    <>
    <WagmiConfig config={config}>
    <ThemeContext.Provider value={theme}>
    <div className="relative h-screen flex">
        <Navbar username='Tony'/>
        {connected?(<Home />):
        (
        <div className="flex h-full w-full justify-center items-center">
          <WalletConnect setConnected={setConnected}/>
        </div>
          )}
    </div>
    </ThemeContext.Provider>
    </WagmiConfig>
    </>
  )
}

export default App
