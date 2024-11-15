import mongoose, { Schema, Document, Model } from 'mongoose';
import { ISet } from './setSchema';
import setSchema from './setSchema';

interface IUser extends Document {
    username: string;
    email: string;
    password: string;
    profilePicture: string;
    folders: ISet[];
}

const userSchema: Schema = new Schema<IUser>({
    username: { 
        type: String, 
        required: true 
    },
    email: { 
        type: String, 
        required: true 
    },
    password: { 
        type: String, 
        required: true 
    },
    profilePicture: { 
        type: String, 
        default: "" 
    },
    folders: { 
        type: [setSchema], 
        ref: 'Folder' 
    }
});

const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>('User', userSchema);
export default User;