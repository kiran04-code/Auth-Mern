import user from '../model/user.js';
import bcrypt from 'bcryptjs';
import createToken from '../serviceAuth/jwt.js';
export async function Signup(req, res, next) {
  const { username, email, password } = req.body;

  try {
    if ( !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await user.findOne({ email });

    if (existingUser) {
      return res.status(403).json({
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
     
     await user.create({
      username: username,
      email: email,
      password: hashedPassword,
    });

    res.status(200).json({
      message: "User created successfully",
    });
  } catch (error) {
    next(error);
  }
}
export async function Signin(req, res, next) {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.json({ error: "All fields are required" });
    }

    const validUser = await user.findOne({ email:email });
    if (!validUser) {
      return res.status(403).json({ error: "User Not Found!" });
    }

    const isPasswordValid = bcrypt.compareSync(password, validUser.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid password" });
    }

    const token = createToken(validUser);
    res.cookie("access_token", token);
    res.status(200).json(validUser );

  } catch (error) {
    next(error);
  }
}

export async function google(req,res,next){
 const users = await user.findOne({email:req.body.email})
  if(users){
    const token = createToken(user)
    res.cookie("access_token",token)
    res.status(200).json(users)
  }
  else{
    const genratorPassword = Math.random().toString(36).slice(-8)+Math.random().toString(36).slice(-8)
    const hashedPassword = bcrypt.hashSync(genratorPassword,10)
    const NewUser = await user.create({
      username: req.body.username.split(" ").join("").toLowerCase() + Math.floor(Math.random() * 10000),
      email: req.body.email,
      password:hashedPassword,
      profile: req.body.photo
    })
    const token = createToken(user)
    res.cookie("access_token",token)
    res.status(200).json(NewUser)
  }
}

export const signout = (req,res,next)=>{
  res.clearCookie("access_tokne")
  res.status(200).json("Sigout Sucess!")
}