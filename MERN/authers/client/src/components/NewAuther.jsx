import React, { useEffect, useState } from 'react';
import { Link , useNavigate } from 'react-router-dom';
import axios from 'axios';


const NewAuther = (props) => {
    let [newOneAuther, setNewOneAuther] = useState({});
    const navigate = useNavigate();
    let [fromErr, setFromErr] = useState({})

    
    const changeHandler = (e) => {
        setNewOneAuther({
            ...newOneAuther, [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/authers/new", newOneAuther)
            .then(response => {
                console.log("New Auther Sub",response)
                if (response.data.error){
                    setFromErr(response.data.error.errors);
                } else {
                    setFromErr({});
                    navigate("/")
                }
            })
            .catch((err) => { console.log("form sub err", err) })
    }

    return (
        <div>
            <h2>
            <Link to="/">Home</Link>
            </h2>
            <h2>Add a new auther:</h2>

            <form onSubmit={submitHandler}>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" onChange={changeHandler}></input>
                    {/* <p>{fromErr.name? fromErr.name.message : null }</p> */}
                    <p>{fromErr.name?.message}</p>
                </div>
                <input type="submit" value="Submit" />
            </form>
            <Link to="/">Cancel</Link>
            
        </div>
    );
};

export default NewAuther;