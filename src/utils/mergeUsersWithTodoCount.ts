import { Todo, User } from "../models";

// Определяем функцию для объединения данных
export function mergeUsersWithTodoCount(users: User[], todos: Todo[]) {
  return users.map((user) => ({
    ...user,
    todoCount: todos.filter((todo) => todo.userId === user.id).length,
  }));
}
