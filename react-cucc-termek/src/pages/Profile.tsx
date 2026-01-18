interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

const products: Product[] = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    description:
      "Noise-canceling over-ear headphones with 30-hour battery life",
    price: 129.99,
  },
  {
    id: 2,
    name: "Cotton T-Shirt (3-Pack)",
    description:
      "Comfortable, breathable everyday basics in assorted colors",
    price: 34.99,
  },
  {
    id: 3,
    name: "USB-C Phone Charger Cable",
    description:
      "6-foot durable charging cable compatible with multiple devices",
    price: 12.99,
  },
  {
    id: 4,
    name: "Stainless Steel Water Bottle",
    description:
      "32oz insulated bottle that keeps drinks cold for 24 hours",
    price: 24.99,
  },
  {
    id: 5,
    name: "Desk Lamp with USB Port",
    description:
      "LED reading lamp with adjustable brightness and built-in USB charging",
    price: 39.99,
  },
  {
    id: 6,
    name: "Bamboo Cutting Board Set",
    description:
      "3-piece set with different sizes for food prep",
    price: 18.99,
  },
  {
    id: 7,
    name: "Running Socks (6-Pack)",
    description:
      "Moisture-wicking athletic socks with arch support",
    price: 22.99,
  },
  {
    id: 8,
    name: "Phone Screen Protector",
    description:
      "Tempered glass protector with easy installation kit for iPhone 15",
    price: 9.99,
  },
  {
    id: 9,
    name: "Portable Phone Stand",
    description:
      "Adjustable aluminum stand compatible with all phones and tablets",
    price: 14.99,
  },
  {
    id: 10,
    name: "Microfiber Cleaning Cloth Bundle",
    description:
      "5 ultra-absorbent cloths for screens and surfaces",
    price: 8.99,
  },
  {
    id: 11,
    name: "Wireless Mouse",
    description:
      "Compact ergonomic mouse with 18-month battery life",
    price: 19.99,
  },
  {
    id: 12,
    name: "Book Light Clip",
    description:
      "Battery-powered reading light that clips to books or e-readers",
    price: 11.99,
  },
];

const Profile = () => {
  const totalPrice = products.reduce(
    (sum, product) => sum + product.price,
    0,
  );

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>Shopping Cart</h1>
      <div
        style={{
          marginBottom: "20px",
          fontSize: "18px",
          fontWeight: "bold",
        }}
      >
        Total Items: {products.length} | Total
        Price: ${totalPrice.toFixed(2)}
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "20px",
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "15px",
              boxShadow:
                "0 2px 4px rgba(0,0,0,0.1)",
              transition: "transform 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform =
                "translateY(-5px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform =
                "translateY(0)")
            }
          >
            <h3
              style={{
                margin: "0 0 10px 0",
                color: "#333",
              }}
            >
              {product.name}
            </h3>
            <p
              style={{
                margin: "0 0 10px 0",
                color: "#666",
                fontSize: "14px",
              }}
            >
              {product.description}
            </p>
            <div
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                color: "#2ecc71",
              }}
            >
              ${product.price.toFixed(2)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
