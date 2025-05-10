import express from 'express';
import {updatetheuserdata,deltete} from "../controller/user.js"
import { homePage } from '../controller/user.js';
const router = express.Router();

router.get("/",homePage)
router.post("/update/:id",updatetheuserdata)
router.get("/delete/:id",deltete)

export default router;