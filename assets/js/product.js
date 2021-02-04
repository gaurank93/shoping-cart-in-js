var products = [];
var cartValue = [];
function addProduct() {
  var product_id = document.getElementById("product_id").value;
  var name = document.getElementById("name").value;
  var price = document.getElementById("price").value;

  var newProduct = {
    product_id: null,
    product_name: null,
    product_price: 0.0,
  };
  newProduct.product_id = product_id;
  newProduct.product_name = name;
  newProduct.product_price = price;

  products.push(newProduct);

  var html = "";
  for (var i = 0; i < products.length; i++) {
    html += "<tr>";
    html += "<td>" + products[i].product_id + "</td>";
    html += "<td>" + products[i].product_name + "</td>";
    html += "<td>" + products[i].product_price + "</td>";
    html += `<td><button class='btn btn-primary' type='submit' onClick='addCart("${products[i].product_id}", this);'/>Add to Cart</button>&nbsp<button class='btn btn-danger' type='submit' onClick='deleteProduct("${products[i].product_id}", this);'/>Delete</button> </td>`;
    html += "</tr>";
  }
  document.getElementById("myTable").innerHTML = html;
    document.getElementById("product_id").value = '';
    document.getElementById("name").value = '';
    document.getElementById("price").value ='';
}

function deleteProduct(product_id, product) {
    product.parentNode.parentNode.parentNode.removeChild(product.parentNode.parentNode);
  for (var i = 0; i < products.length; i++) {
    if (products[i].product_id == product_id) {
      products.splice(i, 1);
    }
  }
  console.log(products);
}

function openBar() {
    document.getElementById("cart").style.display = "block";
    // document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeBar() {
    document.getElementById("cart").style.display = "none"
    // document.getElementById("main").style.marginLeft= "0";
  }

 