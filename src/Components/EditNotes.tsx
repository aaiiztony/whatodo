import { ArrowLeftOutlined } from "@ant-design/icons"
import { Button} from "antd"
import { useState } from "react";

type EditNotetsProps = {
  setActiveNote: React.Dispatch<React.SetStateAction<Boolean>>;
};

const EditNotes = ({setActiveNote}:EditNotetsProps) => {
  const [currentValue, setCurrentValue] = useState({
    title:'Title',
    description:'Description'
  })

  const {title, description} = currentValue;

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setCurrentValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e:any) => {
    e.preventDefault()
    console.log(title, description);
    setActiveNote(false);
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
            className="w-full h-[51px] font-bold rounded-[12px] white px-5"
            />
            <textarea 
            required
            name="description"
            value={description}
            onChange={handleChange}
            className="w-full h-[110px] font-medium rounded-[12px] px-5 py-2 mt-2 resize-none overflow-hidden"
            ></textarea>
            <button type="submit" className="w-full mt-3 h-[34px] font-bold text-white bg-[#3772FF] border-none rounded-[11px]">Save</button>
        </form>
    </div>
  )
}

export default EditNotes