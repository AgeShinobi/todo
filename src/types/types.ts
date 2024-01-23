export type TypeTodo = {
  id: string;
  text: string;
  completed: boolean;
}

export type TypeInputFieldProps = {
  text: string;
  onChangeText: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onAddTodo: () => void;
};

export type TypeTodoListProps = {
  todos: TypeTodo[];
  onRemoveTodo: (todoId: string) => void;
  onToggleComplete: (todoId: string) => void;
}

export type TypeTodoItemProps = TypeTodo & {
  onRemoveTodo: (todoId: string) => void;
  onToggleComplete: (todoId: string) => void;
};