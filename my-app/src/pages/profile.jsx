import { useSelector,useDispatch } from "react-redux";
import { useState } from "react";
import { updatestart,updatesuces,updatefail,deletestart,deletesuces,deletefail,Signout } from "../redux/createSlice/slice";

const Profile = () => {
  const dispatch = useDispatch()
  const { currentUser,loading } = useSelector(state => state.user);

  const [formData, setFormData] = useState();
  const [updatesucess,setUpdateSucess] = useState(false)
  const handleChange = (e) => {
    setFormData((formData) => ({
      ...formData,
      [e.target.id]: e.target.value,
    }));
  };
console.log(formData)
  const handleUpdate = async (e) => {
    e.preventDefault();
  try {
   dispatch(updatestart())
    const res = await fetch(`/api/update/${currentUser._id}`,{
      method:"POST",
      headers:{
        "content-Type":"application/json"
      },
      body:JSON.stringify(formData)
      
    })
    const data = await  res.json()
    dispatch(updatesuces(data))
    setUpdateSucess(true)
  } catch (error) {
    dispatch(updatefail(error))
  }
   
  };
  const hadleuserdelete = async()=>{
  try {
    dispatch(deletestart())
      const res = fetch(`/api/delete/${currentUser._id}`,{
      method:"DELETE",
      
    })
    const data = await res.json()
   dispatch(deletesuces(data))
  } catch (error) {
    dispatch(deletefail())
  }
  }

  const handleSignout = async() =>{
    try {

      const res = fetch("/api/logout")
      dispatch(Signout())
    } catch (error) {
    console.log(error)
    }
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Profile
        </h2>
        <form onSubmit={handleUpdate}>
          <div className="flex justify-center mb-4">
           
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1">Name</label>
              <input
                type="text"
                name="username"
                id = "username"
                defaultValue={currentUser.username}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                id = "email"
                defaultValue={currentUser.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
            disable={loading}
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
            >
            {
              loading ?" Updating..":  "Update Profile"
            }
            </button>

            <button
            onClick={handleSignout}
              type="button"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
            >
              Sign Out
            </button>

            <button
            onClick={hadleuserdelete}
              type="button"
              className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700"
            >
              
              Delete Account
            </button>
            
          </div>
        </form>
        {/* <p className="text-red-500" >{error && "Something Went Wrong!"}</p>
      */}
        <p className="text-green-900 ml-8 mt-2" >{updatesucess && "User is Updated succesFully! "}</p>
     
      </div>
    </div>
  );
};

export default Profile;
