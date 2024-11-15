import mongoose, { Schema, Document, Model } from 'mongoose';
import { ICard } from './cardSchema';
import cardSchema from './cardSchema';

interface IFolder extends Document {
    name: string;
    cards: ICard[];
}

const folderSchema: Schema = new Schema<IFolder>({
    name: { 
        type: String, 
        required: true 
    },
    cards: { 
        type: [cardSchema], 
        required: true 
    },
});

const Folder: Model<IFolder> = mongoose.models.Folder || mongoose.model<IFolder>('Folder', folderSchema);
export default Folder;
export type { IFolder };