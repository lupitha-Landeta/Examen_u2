import React from 'react';

const UserTable = (props) => {
    console.log(props.users);

    return ( 
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Numero</th>
                    <th>Notas</th>
                    <th>Direccion</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
            {
                    props.users.length > 0 ?
                    props.users.map(user => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.notas}</td>
                            <td>{user.direccion}</td>
                            <td>
                            <button className="button muted-button"
                            onClick={() => {props.editRow(user)}}
                            >Editar</button>
                            
                            <button className="button muted-button"
                            onClick={() => {props.deleteUser(user.id)}}
                            >Eliminar</button>
                            </td>
                        </tr>
                    )) : (
                        <tr>
                            <td colSpan={3}>No hay contactos </td>
                        </tr>
                    )

            }
            </tbody>
        </table>
     );
}
 
export default UserTable;