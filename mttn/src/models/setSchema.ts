import mongoose, { Schema, Document, Model } from 'mongoose';
import { ICard } from './cardSchema';

interface ISet extends Document {
    name: string;
    cards: ICard[];
}

const setSchema: Schema<ISet> = new Schema<ISet>({
    name: { type: String, required: true },
    cards: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Card' }]
});

const Set: Model<ISet> = mongoose.models.Set || mongoose.model<ISet>('Set', setSchema);
export default Set;
export type { ISet };