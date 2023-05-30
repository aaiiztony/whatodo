import { Avatar, Typography} from '@mui/material';
const Navbar = () => {
      return (
    <div className='logo_container'>
        <Avatar sx={{ bgcolor: '#3772FF' }}>N</Avatar>
        <Typography
        >Name</Typography>
        {/* add antd to the project */}
        <MenuFoldOutlined />
    </div>
  )
}

export default Navbar