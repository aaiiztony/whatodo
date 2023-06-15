import { EditFilled, PlusOutlined, ShoppingFilled } from "@ant-design/icons";
import { AddListToBlockchain, EditNotes } from ".";
import { Button } from "antd";
import { useContext, useState, ChangeEvent } from "react";
import { TodoContext } from "../context/TodoContext";
import AddTodo from "./AddTodo";

interface InputProps {
    title: string;
    description: string;
    listName: string;
}
interface EditValueProps {
    title: string;
    description: string;
}
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

const NoteContainer = () => {
    const notes = useContext(TodoContext);
    const [activeNote, setActiveNote] = useState<Boolean>(false);
    const [inputValue, setInputValue] = useState<InputProps>({
        title: "",
        description: "",
        listName: "",
    });
    const [editValue, setEditValue] = useState<EditValueProps>({
        title: "",
        description: "",
    });

    const [divList, setDivList] = useState<TodoList[]>(notes);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        //add a listId parameter in a way that clicking on input within a list does not modifies the input of the other list
        setInputValue({ ...inputValue, [e.target.name]: e.target.value });
    };
    //handleaddlist manages if the user wants to add more todos in the frontend
    const handleAddList = () => {
        if (inputValue.listName.trim() !== "") {
            const newTodoList: TodoList = {
                id: inputValue.listName,
                todos: [],
            };
            setDivList((prevDivList) => [...prevDivList, newTodoList]);
            setInputValue({ ...inputValue, listName: "" });
        }
    };
    return (
        <>
            <div className="flex justify-between h-[89%]">
                <div className="main flex w-full m-3 gap-5">
                    <div className="h-full flex">
                        <div className="list_item">
                            <div className="flex gap-2">
                                {divList.map((item, index) => (
                                    <div key={index}>
                                        <div className="min-w-[210px] h-[40px] bg-[#242731] rounded-md p-2 items-center">
                                            <h2>List : {item.id}</h2>
                                        </div>
                                        <AddTodo
                                            inputValue={inputValue}
                                            item={item}
                                            setDivList={setDivList}
                                            setInputValue={setInputValue}
                                        />
                                        {item.todos.map((todo, index) => (
                                            <div
                                                key={index}
                                                className="bg-[#191B20] mt-1 max-w-full min-h-[100px] max-h-full rounded-xl"
                                            >
                                                <div className="flex justify-between items-center">
                                                    <div className="flex items-center gap-2 justify-center">
                                                        <Button
                                                            size="small"
                                                            shape="circle"
                                                            className="ml-2 bg-[#353945] text-white border-none cursor-pointer flex justify-center items-center"
                                                        >
                                                            <ShoppingFilled />
                                                        </Button>
                                                        <div className="font-bold w-max bg-transparent">
                                                            {todo.title}
                                                        </div>
                                                    </div>
                                                    <Button
                                                        size="small"
                                                        shape="circle"
                                                        className="m-2 bg-[#353945] text-white border-none cursor-pointer flex justify-center items-center"
                                                        onClick={() => {
                                                            setEditValue({
                                                                ...editValue,
                                                                title: todo.title,
                                                                description: todo.description,
                                                            });
                                                            setActiveNote(true);
                                                        }}
                                                    >
                                                        <EditFilled />
                                                    </Button>
                                                </div>
                                                <div className="p-3 bg-transparent opacity-80 text-sm">
                                                    {todo.description}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="ml-2 flex w-full">
                            <input
                                value={inputValue.listName}
                                name="listName"
                                onChange={handleInputChange}
                                placeholder="Add Todo List"
                                className="pl-2 min-h-[40px] rounded-md h-max bg-[#242731]"
                            />
                            <Button
                                size="small"
                                shape="circle"
                                className="m-2 bg-[#353945] text-white border-none cursor-pointer flex justify-center items-center ml-[-30px]"
                                onClick={handleAddList}
                                disabled={inputValue.listName.trim() === ""}
                            >
                                <PlusOutlined />
                            </Button>
                        </div>
                    </div>
                </div>
                {activeNote && (
                    <div
                        className="w-[25%] h-full absolute right-0 bg-[#000000]"
                        style={{ borderLeft: "solid #242731" }}
                    >
                        <EditNotes setActiveNote={setActiveNote} editValue={editValue} />
                    </div>
                )}
                <AddListToBlockchain listName={inputValue.listName} />
            </div>
        </>
    );
};

export default NoteContainer;
