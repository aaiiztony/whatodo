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
    id: "Things to Buy",
    todos: [
      {
        id: "First Todo",
        title: "Title Todo 1",
        description: "This is an example todo description",
        isDone: false,
      }
    ]
  },
];

export const TodoContext = createContext<TodoList[]>(initialState);



