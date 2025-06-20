

import express, { Application, Request, Response } from 'express';
import { Book } from '../models/book.models';


 export const bookRoutes= express.Router();

bookRoutes.post('/books', async (req: Request, res: Response) => {

    const body = req.body;
    console.log(body);
    const book = await Book.create(body)

    res.status(201).json({
        success: true,
        message: 'Book created successfully',
        book
    });

});


bookRoutes.get('/books', async (req: Request, res: Response) => {
  const { filter, sortBy = 'createdAt', sort = 'asc', limit = '10' } = req.query;
  const filterCondition: any = {};
  if (filter && typeof filter === 'string') {
    filterCondition.genre = filter;
  }
  const sortCondition: any = {};
  sortCondition[sortBy as string] = sort === 'asc' ? 1 : -1;
  const books= await Book.find(filterCondition).sort(sortCondition).limit(Number(limit))

 console.log(books);
    res.status(201).json({
        success: true,
        message: 'Books retrieved successfully',
        data: books,
    });

});

bookRoutes.get('/books/:bookId', async (req: Request, res: Response) => {

    const bookId = req.params.bookId;
    console.log(bookId);

    const book = await Book.findById(bookId);
  ;
    res.status(201).json({
        success: true,
        message: 'Book retrieved successfully',
        book
    });

    }); 

bookRoutes.patch('/books/:bookId', async (req: Request, res: Response) => {

    const bookId = req.params.bookId
    const updatedBody = req.body;
  

    const note = await Book.findByIdAndUpdate(bookId, updatedBody,{new: true});


    res.status(201).json({
        success: true,
        message: 'Book updated successfully',
        note
    });

});


bookRoutes.delete('/books/:bookId', async (req: Request, res: Response) => {

    const userId = req.params.userId
    const book = await Book.findByIdAndDelete(userId);

    res.status(201).json({
        success: true,
        message: 'Book deleted successfully',
        book
    });

});

