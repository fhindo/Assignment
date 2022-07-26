import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router'
import { Link, useNavigate } from 'react-router-dom';

const DeleteButton = (props) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { productId, successCallback } = props;

    const deleteOneItem = (e) => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then(response => {
                console.log("api delete", response)
                successCallback();
                // navigate("/")
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <button onClick={deleteOneItem}>
                Delete
            </button>
        </div>
    );
};


export default DeleteButton;