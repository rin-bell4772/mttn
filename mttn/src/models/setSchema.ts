import mongoose, { Schema, Document, Model } from 'mongoose';
import { ICard } from './cardSchema';
import cardSchema from './cardSchema';

interface ISet extends Document {
    name: string;
    // cards: ICard[];
}

const setSchema: Schema = new Schema<ISet>({
    name: { 
        type: String, 
        required: true 
    },
    // cards: { 
    //     type: [cardSchema], 
    // },
});

const Set: Model<ISet> = mongoose.models.Folder || mongoose.model<ISet>('Set', setSchema);
export default Set;
export type { ISet };