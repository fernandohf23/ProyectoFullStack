import React, { useEffect, useState } from 'react';
import '../css/Users.css';

export const Users = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/users');
      if (!response.ok) {
        throw new Error('Error fetching users');
      }
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleEdit = (user) => {
    setEditingUser(user);
    setUsername(user.username);
    setPassword(''); // Puedes dejar la contraseña vacía durante la edición
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/users/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        fetchUsers(); // Actualiza la lista después de eliminar
      } else {
        throw new Error('Error deleting user');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const updateData = { username };
      if (password) {
        updateData.password = password; // Solo agrega la contraseña si se proporciona
      }

      const response = await fetch(`http://localhost:5000/api/users/${editingUser.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateData),
      });

      if (!response.ok) {
        throw new Error('Error updating user');
      }

      closeModal();
      fetchUsers(); // Actualiza la lista de usuarios después de la actualización
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const closeModal = () => {
    setEditingUser(null);
    setUsername('');
    setPassword('');
  };

  return (
    <div>
      <h2 className='table-users'>Usuarios Registrados</h2>
      
      {/* Modal */}
      {editingUser && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close" onClick={closeModal}>X</button>
            <form onSubmit={handleUpdate} className="user-form">
              <h3>Editar Usuario</h3>
              <div className="form-group">
                <label>Username:</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Password:</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit" className="create-button">Actualizar Usuario</button>
              <button type="button" className='create-button' onClick={closeModal}>Cancelar</button>
            </form>
          </div>
        </div>
      )}

      <table className="users-table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.username}</td>
              <td>
                <button className="actions-button button-edit" onClick={() => handleEdit(user)}>Editar</button>
                <button className="actions-button button-delete" onClick={() => handleDelete(user.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
