export interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface ITodoList {
  todos: ITodo[];
  handleRemoveTodo: (index: number) => void;
  handleCompleteTodo: (index: number) => void;
}

export interface ITodoItem {
  item: ITodo;
  handleRemoveTodo: (index: number) => void;
  handleCompleteTodo: (index: number) => void;
}
