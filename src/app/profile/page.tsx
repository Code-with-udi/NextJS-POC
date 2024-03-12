'use client';
import axios from 'axios';
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';


export default function ProfilePage() {
  const router = useRouter();
  const [data, setData] = React.useState('nothing')
  const logout = async () => {
    try {
      await axios.get('api/users/logout')
      toast.success("Logout successful")
      router.push('login');
    } catch (error: any) {
        console.log(error);
    }
  }

  const getUserDetails = async () => {
    const res = await axios.get('api/users/me')
    console.log(res.data);
    setData(res.data.data.username)
  }
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      Profile
      <h2 className='p-1 rounded bg-purple-400 m-2'>{data === 'nothing' ? "loading.." : <Link href={`/profile/${data}`}>{data}</Link>}</h2>
      <hr/>
      <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' onClick={logout}>Logout</button>
      <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" onClick={getUserDetails}>Load User</button>
    </div>
    
    
  )
}
