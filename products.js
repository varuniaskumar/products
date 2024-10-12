fetch("https://dummyjson.com/products")
// .then(res => console.log(response))
.then(response => response.json())
.then(res => {
    const data = res.products;
    let  rows = "";
    data.forEach(product => {
        rows += `<tr><td>${product.id}</td><td>${product.title}</td><td>${product.description}</td><td>${product.price}</td><td>${product.discountPercentage}</td><td>${product.rating}</td><td>${product.stock}</td><td>${product.price}</td><td>${product.brand}</td><td>${product.category}</td><td><img src="${product.thumbnail}" title="${product.thumbnail}" alt="${product.thumbnail}" style="width:20%"</td></tr>`
    })%
    console.log(rows)
    document.getElementById("tabledata").innerHTML = rows;
}) 
.catch(error => console.log(error))