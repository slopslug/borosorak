const products = [
  {
    name: "Tesco budget ketchup",
    price: 199,
  },
  {
    name: "Heinz mustard",
    price: 349,
  },
  {
    name: "Organic olive oil",
    price: 1299,
  },
  {
    name: "Whole grain bread",
    price: 249,
  },
  {
    name: "Free range eggs (10 pack)",
    price: 599,
  },
  {
    name: "Greek yogurt",
    price: 179,
  },
  {
    name: "Cheddar cheese block",
    price: 899,
  },
  {
    name: "Sparkling mineral water",
    price: 129,
  },
  {
    name: "Italian pasta",
    price: 299,
  },
  {
    name: "Tomato sauce jar",
    price: 449,
  },
  {
    name: "Dark chocolate bar",
    price: 399,
  },
  {
    name: "Organic honey",
    price: 749,
  },
  {
    name: "Sea salt crackers",
    price: 219,
  },
];

function Products() {
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - {product.price} Ft
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
