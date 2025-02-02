import { useEffect, useState } from "react";
import "./App.css";
import icon from "./icon/icon.svg";
import { UsersWithTodoCount } from "./models";
import { getUserAndTodos } from "./utils/getUserAndTodos";

function App() {
  const [usersWithTodoCount, setUsersWithTodoCount] = useState<
    UsersWithTodoCount[]
  >([]);

  useEffect(() => {
    getUserAndTodos(setUsersWithTodoCount);
  }, []);

  return (
    <div className="main">
      <h1>User To-Do Table</h1>
      <p className="description">User task table for effective planning.</p>
      <table className="table_block">
        <thead>
          <tr>
            <td className="td_number">#</td>
            <td>USERNAME</td>
            <td className="count">TO-DO COUNT</td>
          </tr>
        </thead>
        <tbody>
          {usersWithTodoCount.map(({ id, name, email, todoCount }) => (
            <tr key={id}>
              <td className="td_number number">{id}</td>
              <td className="user_info">
                <img src={icon} />
                <div>
                  <div className="user_name">{name}</div>
                  <div className="user_email">{email}</div>
                </div>
              </td>
              <td className="count number">{todoCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
