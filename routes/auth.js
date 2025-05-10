import express from 'express';
import { Signup,Signin,google,signout } from '../controller/auth.js';
const router = express.Router();

router.post("/signup",Signup)

router.post("/signin",Signin)
router.post("/google",google)
router.post("/logout",signout)
export default router;