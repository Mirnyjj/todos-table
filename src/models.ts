export interface User {
  id: number;
  name: string;
  email: string;
}
export type Todo = {
  userId: number;
};

export interface TodoCount {
  todoCount: number;
}

export type UsersWithTodoCount = User & TodoCount;
// Использовал только необходимые данные

export type UsersAndTodos = {
  todos: Todo[];
  users: User[];
};
