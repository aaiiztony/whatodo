import { MenuFoldOutlined, HomeOutlined, ShareAltOutlined, ThunderboltFilled, BarChartOutlined, GlobalOutlined, MenuOutlined } from '@ant-design/icons';
import { Typography } from '@mui/material';
import { Avatar, Button, Menu, Switch } from 'antd';
import { useState } from 'react';

const Navbar = (props:any) => {
  const {connected, username} = props;
  const [activeMenu, setactiveMenu] = useState(true)
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
  const toggleNavbar = () => setactiveMenu(!activeMenu);
  // add a function that hides the navbar when screensize<1000px
  return (
    <>
      {activeMenu ? (
        <div className='sm:w-[300px] w-[70%] h-full flex flex-col justify-between pt-5' style={borderRight}>
          <div className="sections">
            <div className='flex justify-between items-center w-[85%] m-auto my-2'>
              <div className='logo_container'>
                <Avatar size="default" style={primaryBg}>{username.slice(0,1)}</Avatar>
                <Typography style={fontSize} className='font-bold pl-1'
                >{username}</Typography>
              </div>
              <MenuFoldOutlined onClick={toggleNavbar} style={fontSize} />
            </div>
            <Menu theme='dark' style={{ background: "#000000" }} items={menuItem}/>
          </div>
          <div className="px-3">
            <div className="flex gap-2 py-2 px-2">
              <Button type="ghost" className='bg-[#353945] flex gap-1 justify-center items-center rounded-[9px] py-3' >
                <Avatar size='small' style={primaryBg}>{username.slice(0,1)}</Avatar>
                <span className='text-white'>$0.75</span>
              </Button>
              <Button type="ghost" className='bg-[#A3E3FF] text-[#3772FF] flex gap-1 justify-center items-center rounded-[9px] py-3'>Buy $xyz</Button>
            </div>
            <div className="flex gap-2 p-2 px-4 pb-5 justify-start items-center">
              <GlobalOutlined />
              <Switch
                checkedChildren={<ThunderboltFilled/>}
                unCheckedChildren={<ThunderboltFilled />}
                defaultChecked
                title={`${connected?'Disconnect':'Connect'}Metamask`}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="h-full w-13 border-none" style={borderRight}>
        <Button size='large' icon={<MenuOutlined />} onClick={toggleNavbar} ghost className='my-4 mx-1 border-none'>
        </Button>
        </div>
      )}
    </>
  )
}

export default Navbar