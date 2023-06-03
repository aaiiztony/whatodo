import { useContext } from 'react';
import { Home, Navbar } from './Components';
import './index.css';
import {ThemeContext} from './context/ThemeContext';

const App = () => {
  const theme = useContext(ThemeContext)
  return (
    <>
    <ThemeContext.Provider value={theme}>
    <div className="relative h-screen flex">
        <Navbar />
        <Home/>
    </div>
    </ThemeContext.Provider>
    </>
  )
}

export default App
