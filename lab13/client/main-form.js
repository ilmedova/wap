const ROOT_URL = 'http://localhost:3000'
window.onload = function(){
    loadProduct();
    document.getElementById('add').onclick = addProduct;
}

async function addProduct(event){
    event.preventDefault();
    
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const price = document.getElementById('price').value;

    if(title && description && price){
        const response = await fetch(`${ROOT_URL}/products`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                description,
                price
            })
        });
        const prod = await response.json();
    
        const newTr = `
                <tr>
                    <td>${prod.id}</td>
                    <td>${prod.title}</td>
                    <td>${prod.description}</td>
                    <td>${prod.price}</td>
                    <td>EDIT, DELETE</td>
                </tr>
        `;
    
        document.getElementById('product-table').innerHTML += newTr;
    } else{
        console.log('no submit form');
    } 
    
}


async function loadProduct(){
    const response = await fetch(`${ROOT_URL}/products`);
    const products = await response.json();
    let html = `
        <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Actions</th>
        </tr>
    `;
    products.forEach(prod => {
        html += `
            <tr>
                <td>${prod.id}</td>
                <td>${prod.title}</td>
                <td>${prod.description}</td>
                <td>${prod.price}</td>
                <td>EDIT, DELETE</td>
            </tr>
        `
    });
    document.getElementById('product-table').innerHTML = html;
}