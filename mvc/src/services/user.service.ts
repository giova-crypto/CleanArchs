import UserModel from "../models/user.schema";
import { UserInterface } from "../types/user.type";

/**
 * Register user
 * @param user 
 * @returns 
 */
const signUp = async (user: UserInterface) => {
    const response = await UserModel.create(user);

    return response;
}

/**
 * Get user by email
 * @param email 
 * @returns 
 */
const getUser = async (email: string)=> {
    const response = await UserModel.findOne({email});

    return response;
}

export {signUp, getUser};