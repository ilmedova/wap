const ROOT_URL = 'http://localhost:3000'
window.onload = function(){
    loadBooks();
    document.getElementById('add').onclick = addProduct;
}

async function addProduct(){
    const title = document.getElementById('title').value;
    const isbn = document.getElementById('isbn').value;
    const publishedDate = document.getElementById('publishedDate').value;
    const author = document.getElementById('author').value;

    const response = await fetch(`${ROOT_URL}/book`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title,
            isbn,
            author,
            publishedDate
        })
    });
    const books = await response.json();

    const newTr = `
            <tr>
                <td>${books.id}</td>
                <td>${books.title}</td>
                <td>${books.isbn}</td>
                <td>${books.author}</td>
                <td>${books.publishedDate}</td>
                <td>EDIT, DELETE</td>
            </tr>
    `;

    document.getElementById('books-table').innerHTML += newTr;
    
}


async function loadBooks(){
    const response = await fetch(`${ROOT_URL}/book`);
    const books = await response.json();
    let html = `
        <tr>
            <th>ID</th>
            <th>Title</th>
            <th>ISBN</th>
            <th>Author</th>
            <th>Published Date</th>
            <th>Actions</th>
        </tr>
    `;
    books.forEach(book => {
        html += `
            <tr>
                <td>${book.id}</td>
                <td>${book.title}</td>
                <td>${book.isbn}</td>
                <td>${book.author}</td>
                <td>${book.publishedDate}</td>
                <td>EDIT, DELETE</td>
            </tr>
        `
    });
    document.getElementById('books-table').innerHTML = html;
}