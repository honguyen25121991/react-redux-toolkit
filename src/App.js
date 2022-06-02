import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import { Counter } from "./counter/Counter";

function App() {
  const [listUsers, setListUser] = useState([]);
  const fetchAllUser = async () => {
    let res = await axios.get("http://localhost:8080/users/all");
    setListUser(res.data ? res.data : []);
  };
  useEffect(() => {
    fetchAllUser();
  }, []);
  console.log(listUsers);

  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <div>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Email</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              {listUsers &&
                listUsers.length < 0 &&
                listUsers.map((item, index) => {
                  return (
                    <tr key={`users-${index}`}>
                      <td>{item.id}</td>
                      <td>{item.email}</td>
                      <td>{item.username}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </header>
    </div>
  );
}

export default App;
