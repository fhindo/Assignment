import React, { useEffect, useState } from "react";
import { useParams } from "react-router"
import axios from 'axios';
import { Routes, Route, Link } from "react-router-dom";
import DeleteButton from "./DeleteButton"

const AllProducts = (props) => {
    let [allTheProducts, setAllTheProducts] = useState([]);
    let [deleteReset, setDeleteReset] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then((response) => {
                console.log(response);
                setAllTheProducts(response.data.results)
            })
            .catch(err => { console.log("axios error", err) })
    }, [deleteReset, props.formSubmitted])

    // const deleteOneItem = (e) => {
    //     axios.delete(`http://localhost:8000/api/products/${e}`)
    //         .then(response => {
    //             console.log("api delete", response)
    //             setDeleteReset(!deleteReset)
    //         })
    //         .catch(err => console.log(err))
    // }

    const removeFromDom = productId => {
        setAllTheProducts(allTheProducts.filter(allTheProducts => allTheProducts._id != productId))
    }
    
    return (
        <div>
            <h2>The List of the Products</h2>
            {
                allTheProducts.map((productObj) => {
                    return (
                        <div key={productObj._id}>
                            {/* <p>{productObj.title}</p> */}
                            <Link to={`/${productObj._id}`}>
                                {productObj.title}
                            </Link>
                            <DeleteButton productId={productObj._id} successCallback={()=>removeFromDom(productObj._id)}/>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default AllProducts;