import {GoogleAuthProvider, signInWithPopup,getAuth} from "firebase/auth";
import {app} from "../firebase"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SignInSucess } from "../redux/createSlice/slice";
const OAuth = ()=>{
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleGoogleClick = async()=>{
     try {
        const provider = new GoogleAuthProvider()
        const auth = getAuth(app)
        const result = await signInWithPopup(auth,provider)
        const res = await fetch("/api/google",{
            method:"POST",
            headers:{
                "content-Type":"application/json",
            },
            body: JSON.stringify({
                username:result.user.displayName,
                email:result.user.email,
                photo:result.user.photoURL
            })
        }) 
        const data = await res.json()  
        console.log(data )
      dispatch(SignInSucess(data))
      navigate("/")
     }catch (error) {
        console.log("Could Not Login With Goggle",error)
     }
    }
    return (
      <div>
           <div className="my-4 flex items-center justify-center">
       <span className="text-gray-500 text-sm">or</span>
     </div>

     <button onClick={handleGoogleClick}
       className="w-full flex items-center justify-center gap-2 border py-2 rounded-md hover:bg-gray-100 transition duration-200"
     >
       <img
         src="https://www.svgrepo.com/show/475656/google-color.svg"
         alt="Google"
         className="w-5 h-5"
       />
       <span className="text-sm text-gray-700">Login with Google</span>
     </button>
      </div>  
    )
}


export default OAuth