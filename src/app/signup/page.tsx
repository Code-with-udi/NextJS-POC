"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';

export default function SignupPage(){
    const router = useRouter();
    const [user,setUser] = React.useState({
        email: '',
        password: '',
        username: '',
    })

    const [loading, setLoading] = React.useState(false);

    const onSignup = async () => {
        try{
            setLoading(true);
            const response  = await axios.post("/api/users/signup", user);
            console.log("SignUp Success", response.data);
            toast.success("User SignUp successful")
            router.push("/login");
        } catch (error: any){
            console.log("Login Failed", error.message);
            toast.error(error?.response?.data?.message);
        }finally{

        }


    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-2xl">Register from here</h1>
            <hr/>
            <div className="flex flex-col pt-2 w-[30%]">
            <label htmlFor="username">UserName</label>
            <input className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                id="username"
                type="text"
                value={user.username}
                onChange={(e) => setUser({...user, username: e.target.value})}
                placeholder="UserName"
            />
            <label htmlFor="email">Email</label>
            <input className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                id="email"
                type="text"
                value={user.email}
                onChange={(e) => setUser({...user, email: e.target.value})}
                placeholder="Email"
            />
            <label htmlFor="password">Password</label>
            <input className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                id="password"
                type="password"
                value={user.password}
                onChange={(e) => setUser({...user, password: e.target.value})}
                placeholder="Password"
            />
            <button type="button" onClick={onSignup} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Sign Up</button>
            <div>
                Already User ? <Link className="text-blue-700" href="/login">Login</Link>
            </div>
            </div>
        </div>
    )
}