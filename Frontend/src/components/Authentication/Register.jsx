import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validateForm = () => {
    const { name, email, password } = formData;

    if (!name || !email || !password) {
      return 'Please complete the form';
    }
    if (name.length <= 3) {
      return 'Name must be more than 3 characters';
    }
    if (!email.endsWith('@gmail.com')) {
      return 'Email must be a Gmail account';
    }
    if (password.length <= 3) {
      return 'Password must be more than 3 characters';
    }
    return '';
  };

  const handleRegister = () => {
    const errorMessage = validateForm();
    if (errorMessage) {
      setError(errorMessage);
      return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(formData);
    localStorage.setItem('users', JSON.stringify(users));

    setError('');
    setFormData({ name: '', email: '', password: '' });

    // Navigate to login page on successful registration
    navigate('/login');
  };

  return (
    <div className="flex items-center justify-center h-screen bg-teal-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-teal-400 mb-6">Register</h2>
        <input
          type="text"
          placeholder="Name"
          className="w-full p-2 mb-4 border border-teal-400 rounded"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-4 border border-teal-400 rounded"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-4 border border-teal-400 rounded"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
        <button
          onClick={handleRegister}
          className="w-full p-2 bg-teal-400 text-white rounded hover:bg-teal-500"
        >
          Register
        </button>
        {error && <p className="mt-4 text-red-500">{error}</p>}
      </div>
    </div>
  );
};

export default Register;
