const express = require("express");
const app = express();
app.use(express.json());

const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 }
];

app.get("/products", (req, res) => {
  res.json(products);
});

const PORT = 5003;
app.listen(PORT, () => console.log(`Product Service running on port ${PORT}`));
