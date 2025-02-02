export async function getData() {
  try {
    const [todosResponse, usersResponse] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/todos"),
      fetch("https://jsonplaceholder.typicode.com/users"),
    ]);

    if (!todosResponse.ok || !usersResponse.ok) {
      throw new Error(
        `Ошибка при получении данных: ${todosResponse.statusText}, ${usersResponse.statusText}`
      );
    }

    const [todos, users] = await Promise.all([
      todosResponse.json(),
      usersResponse.json(),
    ]);

    return { todos, users };
  } catch (error: any) {
    console.error("Произошла ошибка:", error.message);
    throw error;
  }
}
