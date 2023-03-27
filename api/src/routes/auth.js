import express from 'express';
import bodyParser from 'body-parser';
import {login, register, logout} from "../controllers/auth.js";

const router = express();

// router.use(bodyParser.urlencoded({ extended: true }));
router.use(express.json());

router.post("/register", register)
router.post("/login", login)
router.post("/logout", logout)
  
export default router;