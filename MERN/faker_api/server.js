const express = require("express");
const app = express();

const { faker } = require('@faker-js/faker');

const port = 8000;

class User {
    constructor() {
        this.password = faker.internet.password();
        this.email = faker.internet.email();
        this.phoneNumber = faker.phone.number()
        this.lastName = faker.name.lastName()
        this.firstName = faker.name.firstName()
        this._id = faker.database.mongodbObjectId();
    }
}

class Company {
    constructor() {
        this._id = faker.database.mongodbObjectId();
        this.name = faker.company.companyName();
        this.address = [
            this.street = faker.address.streetAddress(),
            this.city = faker.address.cityName(),
            this.state = faker.address.stateAbbr(),
            this.zipCode = faker.address.zipCode(),
            this.country = faker.address.county(),
        ] 
    }
}

let u1 = new User();
let u2 = new User();
let u3 = new User();
let u4 = new User();
let u5 = new User();

let users = [
    { u1 },
    { u2 },
    { u3 },
    { u4 },
    { u5 }
];

let c1 = new Company();
let c2 = new Company();
let c3 = new Company();
let c4 = new Company();
let c5 = new Company();

let company = [
    { c1 },
    { c2 },
    { c3 },
    { c4 },
    { c5 }
]

app.get("/api/users/new", (req, res) => {
    res.json({
        const: users.length,
        results: users
    })
})

app.get("/api/companies/new", (req, res) => {
    res.json({
        const : company.length,
        results : company
    })
})

app.get("/api/user/compnay/:id", (req, res)=>{
    res.json({
        compnayInfo: company[req.params.id],
        userInfor : users[req.params.id]
    })
})



app.listen(port, () => { console.log(`Listing on port#: ${port}`) });