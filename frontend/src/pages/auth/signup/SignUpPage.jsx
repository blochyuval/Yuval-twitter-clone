import React, { useState } from 'react';
import XSvg from '../../../components/svgs/X';
import { Link } from 'react-router-dom'

import { MdOutlineMail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { MdPassword } from "react-icons/md";
import { MdDriveFileRenameOutline } from "react-icons/md";

const SignUpPage = () => {

const [formData, setFormData] = useState({
  email: '',
  username: '',
  fullName: '',
  password: ''
});

function handleInputChange(e){
  setFormData({...formData, [e.target.name]: e.target.value});
}

function handleSubmit(e){
  e.preventDefault();
  console.log(formData);
}

const isError = false;

  return (
    <div className='max-w-screen-xl mx-auto flex h-screen px-10'>
      <div className='flex-1 hidden lg:flex items-center justify-center'>
        <XSvg className=' lg:w-2/3 fill-white' />
      </div>
      <div className='flex flex-1 flex-col justify-center items-center'>
        <form className='lg:w-2/3 mx-auto md:mx-20 flex flex-col gap-4' onSubmit={handleSubmit}>
          <XSvg className='w-24 lg:hidden fill-white' />
          <h1 className='text-4xl font-extrabold text-white'>Join today.</h1>
          <label className='input input-bordered rounded flex items-center gap-2'>
            <MdOutlineMail />
            <input 
            className='grow' 
            type="email"
            placeholder='Email'
            name='email'
            onChange={handleInputChange}
            value={formData.email}
             />
          </label>
          <label className='input input-bordered rounded flex items-center gap-2'>
            <FaUser />
            <input
            className='grow' 
            type="text"
            placeholder='Username'
            name='username'
            onChange={handleInputChange}
            value={formData.username}
             />
          </label>
          <label className='input input-bordered rounded flex items-center gap-2'>
            <MdDriveFileRenameOutline />
            <input 
            className='grow'
            type="text"
            placeholder='Fullname'
            name='fullName'
            onChange={handleInputChange}
            value={formData.fullName} />
          </label>
          <label className='input input-bordered rounded flex items-center gap-2'>
            <MdPassword />
            <input 
            type='password'
            className='grow'
            placeholder='Password'
            name='password'
            onChange={handleInputChange}
            value={formData.password}
             />
          </label>
          <button className='btn rounded-full btn-primary text-white'>Sign up</button>
          {isError && <p className='text-red-500'>Something went wrong</p>}
        </form>
        <div className='flex flex-col lg:2/3 gap-2 mt-4'>
          <p className='text-white text-lg'>Already have an account?</p>
          <Link to='/login'>
            <button className='btn rounded-full btn-primary btn-outline w-full text-white'>Sign in</button>
          </Link>
        </div>      
      </div>     
    </div>
  );
};

export default SignUpPage
