import React, {useState} from 'react';
import UserTable from './componentes/UserTable';
import { v4 as uuidv4 } from 'uuid';
import AddUserForm from './componentes/AddUserForm';
import EditUserForm from './componentes/EditUserForm';

function App() {

  const usersData = [
  
  ]

  const [users, setUsers] = useState(usersData);
  
  const addUser = (user) => {
    user.id = uuidv4()
    setUsers([
      ...users,
      user
    ])
  }

  const deleteUser = (id) => {
    console.log(id)
    setUsers(users.filter(user => user.id != id))
  }

  //Editar usuario
  const [bandera, setbandera] = useState(false);
  const [currentUser, setcurrentUser] = useState({
    id: null,
    name: '',
    username: ''
   
   
  });

  const editRow = (user) =>{
    setbandera(true);
    setcurrentUser({
      id: user.id, name: user.name, username: user.username, notas: user.notas
    })
  }

  const updateUser = (id, updateUser) => {
    setbandera(false);
    setUsers(users.map(user => (user.id === id ? updateUser : user)))
  }

  return (
    <div className="container">
      <h1>Proyecto Agenda con operaciones C R U D</h1>
      <div className="flex-row">
      <div className="flex-large">
          {
            bandera ? (
            <div>
              <h2>Editar</h2>
              <EditUserForm currentUser={currentUser} updateUser={updateUser}/>
            </div>
            ) : (
              <div>
                <h2>Añadir Contacto</h2>
                <AddUserForm addUser={addUser}/>
              </div>
            )
          }
        </div>
        <div className="flex-large">
          <h2>Lista de Contactos</h2>
          <UserTable 
          users={users} 
          deleteUser={deleteUser} 
          editRow={editRow}/>
        </div>
      </div>
    </div>
  );
}

export default App;
