const ProductController = require("../controllers/product.controller");

module.exports = app =>{
    app.get("/api/products", ProductController.showAllProducts);
    app.get("/api/products/:id", ProductController.showOneProducts);
    app.post("/api/products", ProductController.createOneProduct);
    app.put("/api/products/:id", ProductController.updateOneProduct);
    app.delete("/api/products/:id", ProductController.deleteOneProduct);
}