import React from 'react';
import { useSelector } from 'react-redux';
const Navbar = () => {
    const {currentUser} = useSelector(state=>state.user)
    return (
        <div className='w-screen h-16 bg-zinc-400 flex items-center px-6 text-white  '>
            <h1 className="text-xl font-bold">AppAuth</h1>
            <div className="ml-auto flex gap-4">
                <a href="/" className="hover:text-zinc-300"> <p>Home</p> </a>
                <a href="/About" className="hover:text-zinc-300"><p>About</p></a>
               <a href='/profile'>
               {
                    currentUser ?(
                        <img
                        src={currentUser.profile || 'https://avatars.githubusercontent.com/u/190065753?v=4'}
                        alt="profile"
                        className="w-10 h-10 rounded-full border-2 border-gray-400"
                      />                      
                    ):(
                        <a href="/Signin" className="hover:text-zinc-300"><p>Sign In </p></a>
                    )
                }
               </a>
            </div>
        </div>
    );
};

export default Navbar;