import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import FetchDataUser from "./components/FetchDataUser";
import { Counter } from "./counter/Counter";
import { fetchAllUsers } from "./redux/slices/userSlice";

function App() {
  // const dispatch = useDispatch();

  // const listUsers = useSelector((state) => state.user.listUsers);
  // const isLoading = useSelector((state) => state.user.isLoading);
  // const isError = useSelector((state) => state.user.isError);

  // const fetchAllUser = async () => {
  //   let res = await axios.get("http://localhost:8080/users/all");
  //   setListUser(res.data ? res.data : []);
  // };
  // useEffect(() => {
  //   dispatch(fetchAllUsers());
  // }, []);
  // if (isError === true && isLoading === false) {
  //   return <div>Some thing wrong...</div>;
  // }
  // if (isError === false && isLoading === true) {
  //   return <div>Data loading...</div>;
  // }
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <FetchDataUser />
        {/* <div>
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
                listUsers.length > 0 &&
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
        </div>  */}
      </header>
    </div>
  );
}

export default App;
