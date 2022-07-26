const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            require: [true, "title is required"],
            minlingth: [5, "min length is 5 char"]
        },
        price: {
            type: Number,
            required: [true, "price is required"],
            min: [1, "min price is 1"]
        },
        description: {
            type: String,
            required: [true, "description is required"],
            minlength: [5, "min length is 5 char"]
        }
    },
    {timestamps : true}
);

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;