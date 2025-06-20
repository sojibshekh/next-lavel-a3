
import { Schema, model } from 'mongoose';
import { IBook } from '../interfaces/book.interface';





const bookSchema = new Schema<IBook>(
  {
    title: { type: String, required: true, trim: true },
    author: { type: String, required: true },
    genre: { 
        type: String, 
        required: true, 
        enum: [ 'FICTION' , 'NON_FICTION' , 'SCIENCE' , 'HISTORY' , 'BIOGRAPHY' , 'FANTASY' ]
    },
    isbn: { type: String, required: true, unique: true },
    description: { type: String },
    copies: { type: Number, required: true, min:0 },
    available: { type: Boolean, default: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);



export const Book = model("Book",bookSchema);