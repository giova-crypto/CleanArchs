import { model, Schema } from "mongoose";

const UserSchema = new Schema(
    {
        name: {
            type: String
        },
        email:{
            type:String,
            unique: true
        },
        password: {
            type:String

        }

    },
    {
        timestamps: true
    }
)

const UserModel = model("users", UserSchema);
export default UserModel;