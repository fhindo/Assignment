import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router'
import { Link , useNavigate } from 'react-router-dom';

const OneProduct = () => {
    const [oneProduc, setOneProduc] = useState({});
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then(response => {
            console.log(response);
            setOneProduc(response.data.results)
        })
        .catch(err => console.log(err))
    }, [])

    const deleteOneItem = (e) => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
        .then(response => {
            console.log("api delete",response)
            navigate("/")
        })
        .catch(err => console.log(err))
    }
        
    return (
        <div>
            <>
            <h2>One item</h2>
            <Link to="/">Home</Link>
            <p>title: {oneProduc.title}</p>
            <p>price: {oneProduc.price}</p>
            <p>description: {oneProduc.description}</p>
            
            <Link to={`/edit/${id}`}>Edit {oneProduc.title}</Link>
            <br></br>
            <button onClick={()=>deleteOneItem(oneProduc._id)}>Delete {oneProduc.title}</button>
            </>

        </div>
    );
};


export default OneProduct;