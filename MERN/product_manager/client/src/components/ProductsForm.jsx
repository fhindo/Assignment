import React, { useEffect, useState } from "react";
import axios from 'axios';


const ProductsForm = (props) => {
    let [formInfo, setFormInfo] = useState({});

    const changeHandler = (e) => {
        setFormInfo({
            ...formInfo, [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/products", formInfo)
            .then(response => {
                console.log(response)
                props.setFormSubmitted(!props.formSubmitted)
            })
            .catch((err) => { console.log("form sub err", err) })
    }


    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input type="text" name="title" onChange={changeHandler} />
                </div>
                <div>
                    <label htmlFor="price">Price:</label>
                    <input type="number" name="price" onChange={changeHandler} />
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <input type="text" name="description" onChange={changeHandler} />
                </div>
                <input type="submit" value="Create" />
            </form>
        </div>
    );
};


export default ProductsForm;