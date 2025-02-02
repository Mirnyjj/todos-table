import { getData } from "../api/getData";
import { UsersAndTodos, UsersWithTodoCount } from "../models";
import { mergeUsersWithTodoCount } from "./mergeUsersWithTodoCount";

export const getUserAndTodos = (
  setUsersWithTodoCount: React.Dispatch<
    React.SetStateAction<UsersWithTodoCount[]>
  >
) => {
  getData()
    .then(({ users, todos }: UsersAndTodos) => {
      // Объединяем данные пользователей и их задач
      const mergedUsers = mergeUsersWithTodoCount(users, todos);
      setUsersWithTodoCount(mergedUsers);
    })
    .catch((error) => {
      console.error("Произошла ошибка:", error);
    });
};
