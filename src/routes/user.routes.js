import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js"

const router = Router()

// when the user directs to /users then it comes from user to register  
router.route("/register").post(registerUser)

// we can also directs it to users to login by
// router.route("/login").post(login)


export default router