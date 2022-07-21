const AutherConrollers = require("../controllers/auther.controllers");

module.exports = (app) => {
    app.get("/api/authers", AutherConrollers.showAllAuthers);
    app.get("/api/authers/:id", AutherConrollers.showOneAuthers);
    app.put("/api/authers/update/:id", AutherConrollers.updateOneAuther);
    app.post("/api/authers/new", AutherConrollers.createOneAuther);
    app.delete("/api/authers/delete/:id", AutherConrollers.deleteOneAuther);
}
