import { ArrowLeftOutlined } from "@ant-design/icons"
import { Button} from "antd"
import { useState } from "react";

interface EditNotesProps {
  setActiveNote: (note: any) => void;
  editValue: {
    title: string;
    description: string;
  };
}
const EditNotes = (props:EditNotesProps) => {
  const {setActiveNote, editValue} = props;
  const {title, description} = editValue;
  const [,setCurrentValue] = useState({
    title:title,
    description:description
  })
  // const {title, description} = currentValue;

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setCurrentValue((prevState:any) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    setActiveNote(false);
    //update the respective todo
  }
  
  return (
    <div className='h-full w-full'>
        <div className="w-1/2 flex justify-center items-center my-2 pr-3">
            <Button icon={<ArrowLeftOutlined/>} ghost className="border-none"></Button>
            <p>Edit Todo</p>
        </div>
        <form className="form w-[85%] m-auto" onSubmit={handleSubmit}>
            <input 
            required
            name="title"
            value={title}
            onChange={handleChange}
            className="w-full h-[51px] font-bold rounded-[12px] white px-5 bg-[#353945]"
            />
            <textarea 
            required
            name="description"
            value={description}
            onChange={handleChange}
            className="w-full h-[110px] font-medium rounded-[12px] px-5 py-2 mt-2 resize-none overflow-hidden bg-[#353945]"
            ></textarea>
            <button type="submit" className="w-full mt-3 h-[34px] font-bold text-white bg-[#3772FF] border-none rounded-[11px]">Save</button>
        </form>
    </div>
  )
}

export default EditNotes