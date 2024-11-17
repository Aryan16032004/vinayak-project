// Logout.jsx
import React, { useContext } from 'react';
import { UserContext } from './Context';

const Logout = () => {
  const { logout } = useContext(UserContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      <h2>Logout</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
