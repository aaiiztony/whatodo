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
        {connected?(<Home />):(<WalletConnect setConnected={setConnected}/>)}
    </div>
    </ThemeContext.Provider>
    </WagmiConfig>
    </>
  )
}

export default App
