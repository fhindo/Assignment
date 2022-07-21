import React, {useState, useEffect}  from 'react';
import { Link , useNavigate } from 'react-router-dom';
import {useParams} from 'react-router'
import axios from 'axios';

const EditAuther = () => {
    const navigate = useNavigate();
    let [updateAuther, setUpdateAuther] = useState({});
    const {id} = useParams();
    let [fromErr, setFromErr] = useState({});

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/authers/${id}`)
        .then(response => {
            console.log(response);
            setUpdateAuther(response.data.results)
        })
        .catch(err => console.log(err))
    }, [])

    const changeHandler = (e) => {
        setUpdateAuther({
            ...updateAuther, [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/authers/update/${id}`, updateAuther)
        .then(response => {
            console.log("The res from the form PUT sub",response);
            if (response.data.error){
                setFromErr(response.data.error.errors);
            } else {
                setFromErr({});
                navigate("/");
            }
        })
        .catch((err)=>{console.log("form sub err", err)})
    }




    return (
        <div>
            <h2><Link to="/">Home</Link></h2>
            <h2>Edit this auther</h2>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={updateAuther.name} onChange={changeHandler}></input>
                    <p>{fromErr.name?.message}</p>
                </div>
                <input type="submit" value="Submit" />
            </form>
            <Link to="/">Cancel</Link>
        </div>
    );
};

export default EditAuther;