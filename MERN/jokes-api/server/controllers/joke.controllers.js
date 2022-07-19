const Joke = require("../models/joke.models");
const jokeRoutes = require("../routes/joke.routes");

//R
module.exports.showAllJokes = (req, res) => {
    Joke.find()
        .then(allTheJokes => res.json({ results: allTheJokes }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.showOneJoke = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then(oneJoke => res.json({ results: oneJoke }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

//https://stackoverflow.com/questions/39277670/how-to-find-random-record-in-mongoose

// module.exports.showOneJokeRandom = (req, res) => {
//     console.log("###################")
//     Joke.count().exec( (err, count)=> {
//         let random = Math.floor(Math.random()*count)
//         console.log(random);
//         Joke.findOne().skip(random).exec( (err, randres) => {
//             console.log("######", randres);
//             return randres;
//         })
//             // .then(randres => res.json({ results: randres }))
//             // .catch(err => res.json({ message: 'Something went wrong Random', error: err }));
//     })
// }

//C
module.exports.createOneJoke = (req, res) => {
    Joke.create(req.body)
        .then(newlyCreatedJoke => res.json({ Joke: newlyCreatedJoke }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

//U
module.exports.updateOneJoke = (req, res) => {
    Joke.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then(updatedJoke => res.json({ results: updatedJoke }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}


//D
module.exports.deleteOneJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));

}