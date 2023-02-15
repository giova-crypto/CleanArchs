import { Router } from "express";
import { getUserByEmail, signUser } from "../controllers/user.controller";

const userRoute = Router();

userRoute.get('/user', getUserByEmail);
userRoute.post('/user', signUser)

export default userRoute;