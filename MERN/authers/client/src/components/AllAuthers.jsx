import React, { useEffect, useState } from "react";
import { useParams } from "react-router"
import axios from 'axios';
import { Routes, Route, Link } from "react-router-dom";


const AllAuthers = (props) => {
    let [allAuthers, setAllAuthers] = useState([]);
    let [deleteReset, setDeleteReset] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8000/api/authers/")
            .then((response) => {
                console.log(response);
                setAllAuthers(response.data.results)
            })
            .catch(err => { console.log("axios error", err) })
    }, [deleteReset])

    const deleteOneItem = (id) => {
        axios.delete(`http://localhost:8000/api/authers/delete/${id}`)
        .then(response => {
            console.log(response)
            setDeleteReset(!deleteReset)
        })
        .catch(err => console.log(err))
    }

    return (
        <div>
            <h3>
                <Link to="/new">Add an auther</Link>
            </h3>
            <h3>We have quotes by:</h3>
            <table>
                <thead>
                    <tr>
                        <th>Auther</th>
                        <th>Actions avaliable</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allAuthers.map((autherObj) => {
                            return (
                                <tr key={autherObj._id}>
                                    <td>{autherObj.name}</td>
                                    <td>
                                    <Link to={`/edit/${autherObj._id}`}>Edit</Link>
                                    </td>
                                    <td>
                                    <button onClick={() => deleteOneItem(autherObj._id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};


export default AllAuthers;