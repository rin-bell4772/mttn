import mongoose, { Schema, Document, Model } from 'mongoose';

interface ICard extends Document {
    term: string;
    definition: string;
}

const cardSchema: Schema = new Schema<ICard>({
    term: { 
        type: String, 
        required: true 
    },
    definition: { 
        type: String, 
        required: true 
    },
});

const Card: Model<ICard> = mongoose.models.Card || mongoose.model<ICard>('Card', cardSchema);
export default { Card };
export type { ICard };
