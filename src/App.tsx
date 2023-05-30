import './index.css';
import {Home, Navbar} from './Components'
import { Alert } from '@mui/material';
const App = () => {
  return (
    <>
    <Alert variant="filled" icon={false} sx={{backgroundColor:'#3772FF'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit</Alert>
    <div className='wrapper'>
    <div className="navbar">
    <Navbar/>
    </div>
    <Home/>
    </div>
    </>
  )
}

export default App
