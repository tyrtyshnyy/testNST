import React from "react";
import "./App.css";
import User from "./components/User";
import Modal from "./components/Modal";
import api from "./api/api";

function App() {
  const [activeModalAdd, setActiveModalAdd] = React.useState(false)

  const [users, setUsers] = React.useState([]);

  const getUserss = async () => {
    const response = await api.get('/person');
     setUsers(response.data)
  };

  React.useEffect(() => {
      getUserss();
  }, []);

  console.log(users);
  return (
    <div className="container">
      <Modal activeModalAdd={activeModalAdd} setActiveModalAdd={setActiveModalAdd}/>
      <div className="table">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Имя</th>
              <th>Фамилия</th>
              <th>    </th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map(item => {
                return <User
                          id={item.id} 
                          name={item.firstName} 
                          surname={item.lastName} 
                          key={item.id}
                          />;
              })}
          </tbody>
        </table>
        <div className="add__person">
          <button onClick={() => setActiveModalAdd(true)}>Добавить сотрудника</button>
        </div>
      </div>
    </div>
  );
}

export default App;
