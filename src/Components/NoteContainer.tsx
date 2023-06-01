import {PlusOutlined } from '@ant-design/icons';
import { EditNotes } from '.';
import { Button } from 'antd';
const NoteContainer = () => {
  return (
   <>
   <div className="flex justify-between h-[89%]">
    <div className="main flex w-full mt-3">
        <div className="min-w-[30%] h-max mx-3 sm:min-h-[2.5rem] bg-[#242731] rounded flex justify-between">
            <h2 className='m-2 opacity-50'>Add Todo List</h2>
            <Button size='small' shape='circle' className='m-2 bg-[#191B20] text-white  cursor-pointer flex justify-center items-center'><PlusOutlined/></Button>
        </div>
    </div>
    <div className="w-[35%] h-full" style={{borderLeft:'solid #242731'}}>
        <EditNotes/>
    </div>
   </div>
   </>
  )
}

export default NoteContainer