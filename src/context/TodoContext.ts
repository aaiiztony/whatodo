import { createContext } from "react";

// Define the schema
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

// Create the initial state
const initialState: TodoList[] = [
  {
    id: "1",
    todos: [
      {
        id: "1",
        title: "Example Todo 1",
        description: "This is an example todo",
        isDone: false
      }
    ]
  }
];

// Create the context
interface TodoContextProps {
  todoLists: TodoList[];
}

export const TodoContext = createContext<TodoContextProps>({
  todoLists: initialState
});



