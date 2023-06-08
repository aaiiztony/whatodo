import { useContext } from 'react';
import { Home, Navbar } from './Components';
import './index.css';
import {ThemeContext} from './context/ThemeContext';
import { WagmiConfig } from 'wagmi';
import { config } from './contracts/wagmi';

const App = () => {
  const theme = useContext(ThemeContext);
    
  return (
    <>
    <WagmiConfig config={config}>
    <ThemeContext.Provider value={theme}>
    <div className="relative h-screen flex">
        <Navbar />
        <Home/>
    </div>
    </ThemeContext.Provider>
    </WagmiConfig>
    </>
  )
}

export default App
