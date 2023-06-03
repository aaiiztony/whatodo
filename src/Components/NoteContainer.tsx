import { PlusOutlined, ShoppingFilled } from '@ant-design/icons';
import { EditNotes } from '.';
import { Button } from 'antd';
import { useContext, useState } from 'react';
import { TodoContext } from '../context/TodoContext';

const NoteContainer = () => {
    const [activeNote, setActiveNote] = useState<Boolean>(false);
    const [inputValue, setInputValue] = useState<string>('');
    const [divList, setDivList] = useState<string[]>([]);

    const handleInputChange = (e: any) => {
        setInputValue(e.target.value);
    };

    const handleAddList = () => {
        if (inputValue.trim() !== '') {
            setDivList([...divList, inputValue]);
            setInputValue('');
        }
    };
    const notes = useContext(TodoContext);
    console.log(notes);
    return (
        <>
            <div className="flex justify-between h-[89%]">
                <div className="main flex w-full m-3 gap-5">
                    <div className="h-full flex">
                        <div className="list_item">
                        <div className='flex gap-2'>
                            {divList.map((item, index) => (
                                <div>
                                <div key={index} className='min-w-[210px] h-[40px] bg-[#242731] rounded-[9px] p-2 items-center'>
                                    <h2>List : {item}</h2>
                                </div>
                                 <div className='bg-[#191B20] mt-1 w-full min-h-[100px] rounded-[16px]'>
                                 <div className="flex justify-between items-center">
                                     <div className="title-logo flex items-center gap-2 justify-center">
                                         <Button size='small' shape='circle' className='ml-2 bg-[#353945] text-white border-none cursor-pointer flex justify-center items-center'><ShoppingFilled /></Button>
                                         <input className='font-bold w-full bg-transparent' placeholder='Add Todo' required />
                                     </div>
                                     <Button size='small' shape='circle' className='m-2 bg-[#353945] text-white border-none cursor-pointer flex justify-center items-center' onClick={() => setActiveNote(true)}><PlusOutlined/></Button>
                                 </div>
                                 <input className='pl-2 w-full bg-transparent opacity-50 text-sm' placeholder='Add Todo Description'/>
                             </div>
                             </div>
                            ))}
                        </div>
                        </div>
                        <div className="ml-2 flex w-full">
                            <input
                                required={true}
                                value={inputValue}
                                onChange={handleInputChange}
                                placeholder='Add Todo List'
                                className='pl-2 min-h-[40px] rounded-[9px] h-max bg-[#242731]' />
                            <Button size='small' shape='circle' className='m-2 bg-[#353945] text-white border-none cursor-pointer flex justify-center items-center ml-[-30px]' onClick={handleAddList} disabled={inputValue.trim() === ''}><PlusOutlined /></Button>
                        </div>
                    </div>
                </div>
                {activeNote &&
                    <div className="w-[35%] h-full" style={{ borderLeft: 'solid #242731' }}>
                        <EditNotes setActiveNote={setActiveNote} />
                    </div>}
            </div>
        </>
    )
}

export default NoteContainer