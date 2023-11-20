let books = [
    { id: 1, title: "Tess of the D'erberville", ISBN: 1, publishedDate: "1750-01-01", author: "Thomas Hardy" },
    { id: 2, title: "Pride and Prejudice", ISBN: 1, publishedDate: "1750-01-01", author: "Jane Austen"},
    { id: 3, title: "Jane Eyre", ISBN: 1, publishedDate: "1750-01-01", author: "Jane Austen" }
]
let counter = 4;

module.exports = class Book{
    constructor(id, title, ISBN, publishedDate, author){
        this.id = id;
        this.title = title;
        this.ISBN = ISBN;
        this.publishedDate = publishedDate;
        this.author = author;
    }

    static getAllBooks(){
        return books;
    }

    static getBookById(id){
        return books.find(b => b.id == id);
    }

    save(){
        this.id = counter++;
        books.push(this);
    }

    updateById(id){
        const index = books.findIndex(b => b.id == id);
        if(index > -1){
            this.id = id;
            books[index] = this;
        }
        else{
            throw new Error(`Book with ID: ${id} was not found`);
        }
    }

    static deleteById(id){
        const index = books.findIndex(b => b.id == id);
        if(index > -1){
            books.splice(index, 1);
        }
        else{
            throw new Error(`Book with ID: ${id} was not found`);
        }
    }



}