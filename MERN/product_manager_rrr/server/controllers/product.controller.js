const Product = require("../models/product.model");

//R
module.exports.showAllProducts = (req, res)=>{
    Product.find()
    .then(allTheProducts => res.json({results: allTheProducts}))
    .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.showOneProducts = (req, res)=>{
    Product.findOne({_id: req.params.id})
    .then(oneProducts => res.json({results: oneProducts}))
    .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

//C
module.exports.createOneProduct = (req, res) =>{
    Product.create(req.body)
    .then(newlyCreatedProduct => res.json({results: newlyCreatedProduct}))
    .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

//U
module.exports.updateOneProduct = (req, res) =>{
    Product.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
    .then(updatedProduct => res.json({results: updatedProduct}))
    .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

//D
module.exports.deleteOneProduct = (req, res) =>{
    Product.deleteOne({_id: req.params.id})
    .then(result => res.json({results: result}))
    .catch(err => res.json({ message: 'Something went wrong', error: err }));
}