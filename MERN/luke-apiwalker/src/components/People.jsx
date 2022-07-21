import React, { useEffect, useState } from "react";
import { useParams } from "react-router"
import axios from 'axios';

const People = () => {
    const [peopleInfo, setPeopleInfo] = useState([]);
    const { drop, id } = useParams();
    const [isLoading, setLoading] = useState(true);
    

    useEffect(() => {
        getAllNodes();
    }, []);

    //fetch the API people
    const getAllNodes = () => {
        axios.get("https://swapi.dev/api/people")
            .then((response) => {
                console.log("The API people respons console is ", response);
                setPeopleInfo(response.data.results);
                setLoading(false);
            }).catch(err => { console.log("API ERROR These aren't the droids you're looking for", err) });
    }


    // const timeOut = () => {
    //     console.log("start timer")
    //     setTimeout(4000);
    // }

    //return info to the app.js from this block
    if (isLoading) {
        return <div className="App">Loading...</div>;
    }
    return (
        <div>
            <h1>People ID: {id}</h1>
            {/* {peopleInfo.map((oneItem, index) => {
                console.log(oneItem.name, index);
            })} */}

            {/* {drop}
            {id}
            {console.log("THE Drop Option: ", drop)}
            {console.log("The ID on the people componante: ", id)}
            {console.log("DATATAT", peopleInfo[0].name)} */}
            <p>Name: {peopleInfo[id].name}</p>
            <p>Height: {peopleInfo[id].height}</p>
            <p>Mass: {peopleInfo[id].mass}</p>
            <p>Eye Color: {peopleInfo[id].eye_color}</p>


        </div>
    );
}

export default People;