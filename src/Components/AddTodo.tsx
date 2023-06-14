import { PlusOutlined, ShoppingFilled } from '@ant-design/icons';
import { Button } from 'antd';
interface Todo {
    id: string;
    title: string;
    description: string;
    isDone: boolean;
}

interface TodoList {
    id: string;
    todos: Todo[];
}

const AddTodo = ({inputValue, item, setDivList, setInputValue }: any) => {
    
    const handleAddTodo = (listId: string) => {
        const listName = listId.trim();
        if (listName !== '') {
            const newTodo = {
                id: crypto.randomUUID(),
                title: inputValue.title,
                description: inputValue.description,
                isDone: true,
            };
            setDivList((prevDivList: TodoList[]) => {
                // Find the list with the specified listId
                const updatedDivList = prevDivList.map(list => {
                    if (list.id === listId) {
                        // Add the new todo to the todos array of the list
                        return {
                            ...list,
                            todos: [...list.todos, newTodo]
                        };
                    }
                    return list;
                });

                return updatedDivList;
            });

            setInputValue({ ...inputValue, title: '', description: '' });
        }
    };
    const handleInputChange = (e:any) => {
        const {name, value} = e.target;
        setInputValue({...inputValue, [name]:value})
    }
    const handleInputSize = (e: any) => {
        let container = e.target;
        container.style.height = 'auto';
        container.style.height = `${container.scrollHeight + 5}px`;
    }
    return (
        <div className='bg-[#191B20] mt-1 w-full min-h-[100px] rounded-[16px]'>
            <div className="flex justify-between items-center">
                <div className="title-logo flex items-center gap-2 justify-center">
                    <Button size='small' shape='circle' className='ml-2 bg-[#353945] text-white border-none cursor-pointer flex justify-center items-center'><ShoppingFilled /></Button>
                    <input className='font-bold w-full bg-transparent' placeholder='Add Todo' required name='title' value={inputValue.title} onChange={handleInputChange} />
                </div>
                <Button size='small' shape='circle' className='m-2 bg-[#353945] text-white border-none cursor-pointer flex justify-center items-center' onClick={() => handleAddTodo(item.id)}><PlusOutlined /></Button>
            </div>
            <textarea className='px-2 w-full bg-transparent opacity-50 text-sm resize-none overflow-none' placeholder='Add Todo Description' name='description' onInput={handleInputSize} value={inputValue.description} onChange={handleInputChange}
            ></textarea>
        </div>
    )
}

export default AddTodo