import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router'
import axios from 'axios';
import { Link , useNavigate } from 'react-router-dom';

const EditProduct = () => {
    const navigate = useNavigate();
    const [oneProduc, setOneProduc] = useState({});
    const {id} = useParams();

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then(response => {
            console.log(response);
            setOneProduc(response.data.results)
        })
        .catch(err => console.log(err))
    }, [])

    const changeHandler = (e) => {
        setOneProduc({
            ...oneProduc, [e.target.name]: e.target.value
        })
    }
    
    const submitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/${id}`, oneProduc)
        .then(response => {
            console.log("The res from the form PUT sub",response);
            navigate("/");
        })
        .chach((err)=>{console.log("form sub err", err)})
    }
    
    return (
        <div>
            <h2>Edit one item</h2>
            <Link to="/">Home</Link>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input type="text" name="title" value={oneProduc.title} onChange={changeHandler}/>
                </div>
                <div>
                    <label htmlFor="price">Price:</label>
                    <input type="number" name="price" value={oneProduc.price} onChange={changeHandler}/>
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <input type="text" name="description" value={oneProduc.description} onChange={changeHandler}/>
                </div>
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default EditProduct;