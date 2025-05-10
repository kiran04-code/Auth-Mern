import React from "react";
import Navbar from '../components/navbar'
const About = () => {
  return (
   <div>
    <Navbar/>
     <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        
        <div className="max-w-xl text-center bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">About Us</h1>
          <p className="text-gray-600">
            This is a MERN authentication project built with React and Tailwind CSS. 
            The purpose of this page is to describe the app, its features, and the technologies used.
          </p>
        </div>
      </div>
   </div>
  );
};

export default About;
