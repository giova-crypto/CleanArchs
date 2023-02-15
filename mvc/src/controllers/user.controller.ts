import { Request, Response } from "express";

import { signUp, getUser } from "../services/user.service";


const getUserByEmail = async ({ body }:Request, res:Response)=>{
    const { email } = body;
    const user = await getUser(email);
    res.send({ user });
}

const signUser = async ({ body }:Request, res:Response)=>{
    const user = await signUp(body);
    res.send({user});

}

export { getUserByEmail, signUser };