import { MenuFoldOutlined, HomeOutlined, ShareAltOutlined, ThunderboltFilled, BarChartOutlined, GlobalOutlined, MenuOutlined } from '@ant-design/icons';
import { Typography } from '@mui/material';
import { Avatar, Button, Menu, Switch } from 'antd';
import { useState } from 'react';

const Navbar = () => {
  const [activeMenu, setactiveMenu] = useState(true)

  // add a function that hides the navbar when screensize<1000px
  const fontSize = {
    fontSize: '1.5rem'
  }
  const toggleNavbar = () => setactiveMenu(!activeMenu);
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
        label: 'Section 8',
        icon: (<ShareAltOutlined />),
      }
    ]
  return (
    <>
      {activeMenu ? (
        <div className='sm:w-[300px] w-[70%] h-full flex flex-col justify-between pt-5' style={{borderRight:'solid #242731'}}>
          <div className="sections">
            <div className='flex justify-between items-center w-[85%] m-auto my-2'>
              <div className='logo_container'>
                <Avatar size="default" style={{backgroundColor: '#3772FF'}}>N</Avatar>
                <Typography style={fontSize} className='font-bold pl-1'
                >Name</Typography>
                {/* add antd to the project */}
              </div>
              <MenuFoldOutlined onClick={toggleNavbar} style={fontSize} />
            </div>
            <Menu style={{ background: "#000000", color: "white" }} items={menuItem} />
          </div>
          <div className="px-3">
            <div className="flex gap-2 py-2 px-2">
              <Button type="ghost" className='bg-[#353945] flex gap-1 justify-center items-center rounded-[9px] py-3' >
                <Avatar size='small' style={{backgroundColor: '#3772FF'}}>N</Avatar>
                <span className='text-white'>$0.75</span>
              </Button>
              <Button type="ghost" className='bg-[#A3E3FF] text-[#3772FF] flex gap-1 justify-center items-center rounded-[9px] py-3'>Buy $xyz</Button>
            </div>
            <div className="flex gap-2 p-2 px-4 pb-5 justify-start items-center">
              <GlobalOutlined />
              <Switch
                checkedChildren={<ThunderboltFilled />}
                unCheckedChildren={<ThunderboltFilled />}
                defaultChecked
              />
            </div>
          </div>
        </div>
      ) : (
        <Button icon={<MenuOutlined />} onClick={toggleNavbar} ghost className='absolute left-0 m-4 outline-none flex justify-center items-center'>
        </Button>
      )}
    </>
  )
}

export default Navbar