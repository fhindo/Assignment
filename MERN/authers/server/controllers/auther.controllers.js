const Auther = require("../models/auther.model");

//R
module.exports.showAllAuthers = (req, res)=>{
    Auther.find()
    .then(allTheAuthers => res.json({results: allTheAuthers}))
    .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.showOneAuthers = (req, res)=>{
    Auther.findOne({_id: req.params.id})
    .then(oneAuthers => res.json({results: oneAuthers}))
    .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

//C
module.exports.createOneAuther = (req, res) =>{
    Auther.create(req.body)
    .then(newlyCreatedAuther => res.json({results: newlyCreatedAuther}))
    .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

//U
module.exports.updateOneAuther = (req, res) =>{
    Auther.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
    .then(updatedAuther => res.json({results: updatedAuther}))
    .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

//D
module.exports.deleteOneAuther = (req, res) =>{
    Auther.deleteOne({_id: req.params.id})
    .then(result => res.json({results: result}))
    .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
