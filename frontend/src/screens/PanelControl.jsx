import React, { useState } from 'react';
import { UserForm } from '../components/UserForm';
import { Users } from '../components/Users';

import '../css/PanelControl.css';

export const PanelControl = () => {
  const [userListUpdated, setUserListUpdated] = useState(false);

  const handleUserCreated = () => {
    setUserListUpdated((prev) => !prev); // Forzar a que se actualice la lista de usuarios
  };

  return (
    <div>
      <div>

        <UserForm onUserCreated={handleUserCreated} />
      </div>
      <div>
        <Users userListUpdated={userListUpdated} />
      </div>
    </div>
  );
};
