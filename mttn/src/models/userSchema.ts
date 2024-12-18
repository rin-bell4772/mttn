import mongoose, { Schema, Document, Model } from 'mongoose';
import { ISet } from './setSchema';

interface IUser extends Document {
    username: string;
    email: string;
    password: string;
    profilePicture: string;
    sets: ISet[];
}

const userSchema: Schema<IUser> = new Schema<IUser>({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profilePicture: { type: String, default: "" },
    sets: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Set' }]
});

const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>('User', userSchema);
export default User;
export type { IUser };