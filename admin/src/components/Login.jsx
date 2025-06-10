
import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import sopContext from '../context/sopContext';

const Login = ({ setToken }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

const onSubmitHandler = async (e) => {
  try {
    e.preventDefault();
    const response = await axios.post(backendUrl + '/api/user/admin' , {email, password})
    if (response.data.success) {
      setToken(response.data.token)
    }else{
      toast.error(response.data.message)
    }
  } catch (error) {
    toast.error(error.message || 'Login failed. Please try again.');
  }
}
  return (
    <div className="min-h-screen flex items-center justify-center w-full">
        <div className='bg-white shadow-md rounded-lg px-8 py-6 max-w-md'>
        <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
      <form onSubmit={onSubmitHandler}  className="bg-white shadow rounded p-6 max-w-md w-full">
        <div className="mb-3 min-w-72">
          <p className="text-sm font-medium text-gray-700 mb-2">Email Address</p>
          <input
            type="email"
            placeholder="your@email.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none"
          />
        </div>
        <div className="mb-3 min-w-72">
          <p className="text-sm font-medium text-gray-700 mb-2">Password</p>
          <input
            type="password"
            placeholder="Enter your password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none"
          />
        </div>
        <button type="submit" className="bg-black w-full text-white py-2 px-4 rounded mt-2">Login</button>
      </form>
        </div>
    </div>
  );
};

export default Login;