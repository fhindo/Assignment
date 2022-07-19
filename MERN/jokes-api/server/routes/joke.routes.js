const JokeConrollers = require("../controllers/joke.controllers");

module.exports = (app) => {
    app.get("/api/jokes", JokeConrollers.showAllJokes);
    app.get("/api/jokes/:id", JokeConrollers.showOneJoke);
    // app.get("/api/random", JokeConrollers.showOneJokeRandom);
    app.put("/api/jokes/update/:id", JokeConrollers.updateOneJoke);
    app.post("/api/jokes/new", JokeConrollers.createOneJoke);
    app.delete("/api/jokes/delete/:id", JokeConrollers.deleteOneJoke);
}