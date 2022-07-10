import React from "react";
import { useState } from "react";

const UserForm = props => {
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confpassword, setConfPassword] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = {firstname, lastname, email, password, confpassword};
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfPassword("");
        console.log(newUser);
    }
    return (
        <div>
            <form onSubmit={createUser}>
                <div>
                    <label htmlFor="firstname">First Name:</label>
                    <input type="text" onChange={(e) => setFirstName(e.target.value)} value={firstname} />
                    <br></br>
                </div>
                <div>
                    <label htmlFor="lastname">Last Name:</label>
                    <input type="text" onChange={(e) => setLastName(e.target.value)} value={lastname} />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} autoComplete="off"/>
                </div>
                <div>
                    <label htmlFor="confpassword">Confirm Password:</label>
                    <input type="password" onChange={(e) => setConfPassword(e.target.value)} value={confpassword} autoComplete="off"/>
                </div>
            </form>
            <div>
                <h2>Your Data Form</h2>
                <p>First Name: {firstname}</p>
                <p>Last Name: {lastname} </p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confpassword}</p>
            </div>
        </div>
    );
}

export default UserForm;