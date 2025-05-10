import React,{useState} from "react";
import Navbar from '../components/navbar';
import OAuth from '../components/Oauth'
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const navigate = useNavigate()
  const [fromData, setFormData] = useState({})
  const [error, setError] = useState(null);
  const [responseData, setResponseData] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setFormData({...fromData,[e.target.id]: e.target.value});
  }
  const handleSubmit = async (e)=>{
    e.preventDefault();

  try {
    setLoading(true)
    setError(false)
    const res = await fetch('/api/signup',{
      method:"POST",
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(fromData),
   })
    const data = await res.json()
    setResponseData(data)
    setLoading(false)
    navigate("/signin")
  } catch (error) {
    setLoading(false)
    setError(true)
    
    console.log(error)
  }
  }
  return (
   <div>
    <Navbar/>
     <div className="w-full min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Sign Up</h2>
        <form  onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">Name</label>
            <input
              type="text" 
              onChange={handleChange}
              id = 'username'
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              id = 'email'
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              type="password"
              id = 'password'
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            disabled={loading} className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200" 
          >
           {
            loading ? "Loading..." : "Sign Up"
           }
          </button>
        </form>
        <OAuth/>
        <p className="text-sm text-center mt-4 text-gray-600">
          Already have an account?{" "}
          <a href="/signin" className="text-blue-600 hover:underline">
            Sign In
          </a>
          {
            error && <span className="text-red-600">{error}</span>
          }
        </p>
       <div className="div">
       {responseData?.message && (
               <span className="text-green-600">{responseData.message}</span>
            )}
       </div>
      </div>
    </div>
   </div>
  );
};

export default Signup;
