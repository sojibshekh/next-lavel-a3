"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const books_controler_1 = require("./app/controllers/books.controler");
const borrow_controler_1 = require("./app/controllers/borrow.controler");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/api", books_controler_1.bookRoutes);
app.use("/api", borrow_controler_1.borrowRoutes);
app.get('/', (req, res) => {
    res.send('Hello, Library Management!');
});
exports.default = app;
