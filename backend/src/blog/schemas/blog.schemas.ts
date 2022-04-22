import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { User } from 'src/user/schemas/user.schemas';

export type BlogDocument = Blog & Document;

@Schema()
export class Blog {
    @Prop()
    id: mongoose.Schema.Types.ObjectId;

    @Prop({ required: true })
    title: string;

    @Prop({ required: true })
    content: string;

    @Prop({ required: true })
    metaDescription: string;

    @Prop()
    photoURL: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    createdBy: User;

    @Prop()
    createdAt: Date;
}

export const BlogSchema = SchemaFactory.createForClass(Blog);