import mongoose, { Schema, Document, Model } from 'mongoose';

interface ICard extends Document {
    term: string;
    definition: string;
    image: string;
}

const cardSchema: Schema<ICard> = new Schema<ICard>({
    term: { type: String, required: true },
    definition: { type: String, required: true },
    image: { type: String, required: false }
});

const Card: Model<ICard> = mongoose.models.Card || mongoose.model<ICard>('Card', cardSchema);
export default Card;
export type { ICard };
