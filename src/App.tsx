import { Home, Navbar } from './Components';
import './index.css';

const App = () => {
  return (
    <>
    <div className="relative h-screen flex">
        <Navbar />
        <Home/>
    </div>
    </>
  )
}

export default App
