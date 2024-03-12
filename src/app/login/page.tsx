"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import axios from 'axios';
import toast from "react-hot-toast";

export default function LoginPage() {
    const router = useRouter();
    const [user,setUser] = React.useState({
        email: '',
        password: '',
    });

    const onLogin = async () => {
        try{
            const response = await axios.post("/api/users/login", user);
            console.log("Login Success", response.data);
            toast.success("Login successfully")
            router.push("/profile");
        } catch(error: any){
            console.log("Login Failed", error?.message );
            toast.error(error?.response?.data?.error || "Something went wrong")
        } finally{
    
        }
    }

    useEffect(() => {

    },[user]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-2xl">Login</h1>
            <hr/>
            <div className="flex flex-col pt-2 w-[30%]">
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
            <button type="button" onClick={onLogin} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Login</button>
            <div>New Here ? <Link className="text-blue-700" href="/signup">Sign Up</Link></div>
            </div>
        </div>
    )
}