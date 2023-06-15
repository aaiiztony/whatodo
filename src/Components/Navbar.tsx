import { MenuFoldOutlined, HomeOutlined, ShareAltOutlined, ThunderboltFilled, BarChartOutlined, GlobalOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Typography } from '@mui/material';
import { Avatar, Button, Menu, Switch } from 'antd';
import { useEffect, useState } from 'react';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const Navbar = (props:any) => {
  //to access the username and metamask connection status
  const {connected, username} = props;
  //to check if the menu is opened or not
  const [activeMenu, setActiveMenu] = useState<Boolean>(true)
  const [screenSize, setScreenSize] = useState<number | undefined>(undefined);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  useEffect(() => {
    if (screenSize && screenSize <= 800) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);
  const menuItem =
    [
      {
        key: 'home',
        label: 'Home',
        icon: (<HomeOutlined />),
      },
      {
        key: 'section1',
        label: 'Section 1',
        icon: (<BarChartOutlined />),
      },
      {
        key: 'section2',
        label: 'Section 2',
        icon: (<ThunderboltFilled />),
      },
      {
        key: 'section 8',
        label: 'Section 8',
        icon: (<ShareAltOutlined />),
      },
      {
        key: 'section9',
        label: 'Section 9',
        icon: (<ShareAltOutlined/>),
      }
    ]
  
  const fontSize = { fontSize: '1.5rem' };
  const primaryBg = { backgroundColor: '#3772FF' };
  const borderRight ={ borderRight: '3px solid #242731' };
  const [darkMode, setDarkMode] = useState<Boolean>(false);
  //function to toggle navbar
  const toggleNavbar = () => setActiveMenu(!activeMenu);
  //darkMode function
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    const body = document.body.style;
    if (body.backgroundColor === 'rgb(0, 0, 0)' || body.backgroundColor === '#000000') {
      body.backgroundColor = 'rgb(129, 198, 241)';
    } else {
      body.backgroundColor = '#000000';
    }
  };
  return (
    <>
      {activeMenu ? (
        <div className='sm:w-[250px] w-[70%] h-full flex flex-col justify-between pt-5' style={borderRight}>
          <div className="sections">
            <div className='flex justify-between items-center w-[85%] m-auto my-2'>
              <div className='logo_container'>
                <Avatar size="default" style={primaryBg}>{username.slice(0,1)}</Avatar>
                <Typography style={fontSize} className='font-bold pl-1'
                >{username}</Typography>
              </div>
              <MenuFoldOutlined onClick={toggleNavbar} style={fontSize} />
            </div>
            <Menu theme={darkMode?'dark':'light'}
            style={{ background: darkMode?'#000000':'rgb(129, 198, 241)'} }
            items={menuItem}/>
          </div>
          <div className="px-3">
            <div className="flex gap-2 py-2 px-2">
              <Button type="ghost" className='bg-[#353945] flex gap-1 justify-center items-center rounded-lg py-3' >
                <Avatar size='small' style={primaryBg}>{username.slice(0,1)}</Avatar>
                <span className='text-white'>$0.75</span>
              </Button>
              <Button type="ghost" className='bg-[#A3E3FF] text-[#3772FF] flex gap-1 justify-center items-center rounded-lg py-3'>Buy $xyz</Button>
            </div>
            <div className="flex gap-2 p-2 px-4 pb-5 justify-start items-center">
              <GlobalOutlined />
              <Switch
                checkedChildren={<DarkModeIcon/>}
                unCheckedChildren={<LightModeIcon />}
                defaultChecked={false}
                onClick={toggleDarkMode}
                title={`${connected?'Disconnect':'Connect'} Metamask`}/>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-full border-none px-3 py-6" style={borderRight}>
       <MenuUnfoldOutlined style={fontSize} onClick={toggleNavbar}/>
        </div>
      )}
    </>
  )
}

export default Navbar