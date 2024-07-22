//Array bidensional para almacenar los productos disponibles
const products = [
    //Lista de productos en el siguiente formato:[ID,Nombre,Precio,Ruta de Imagen]
    [1, "", 1000, "imagenes/vestido1.webp"],
    [2, "", 1000, "imagenes/vestido2.jpg"],
    [3, "", 1000, "imagenes/vestido3.jpg"],
    [4, "", 1000, "imagenes/vestido4.jpg"],
    [5, "", 1000, "imagenes/vestido5.jpg"],
    [6, "", 1000, "imagenes/vestido6.jpg"],
    [7, "", 1000, "imagenes/vestido7.jpg"],
    [8, "", 1000, "imagenes/vestido8.jpg"]
];
//Array para almacenar los productos agregados al carrito
const carrito = [];
//Funcion para mostrar los productos disponibles en la pagina
function displayProducts() {
    const productListDiv = document.getElementById("padre")//seleccionar contenedor
    console.log(productListDiv)
    products.forEach((product) => {
        const productCard = document.createElement("div");//Agregamos una clase para el estilo css
        productCard.className = "product-card"
        productCard.innerHTML = `
     <img src="${product[3]}" alt="${product[1]}">
  <div>
    <h4>${product[1]}</h4>
    <p>Precio:$${product[2].toFixed(2)}</p>
    <div class="quantity-input">
        <label for="quantity-${product[0]}">Cantidad:</label>
        <input type="number" id="quantity-${product[0]}" min="1" value="1">
    </div>
    <button onclick="addToCard(${product[0]})">Agregar al Carrito</button>
    </div>`;//Creamos el contenido HTML para mostrar la informacion del producto
        productListDiv.appendChild(productCard);//Agregamos el producto al contenedor
    })
}
displayProducts()