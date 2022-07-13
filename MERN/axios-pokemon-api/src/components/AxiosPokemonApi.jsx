import React, { useState } from "react";
import axios from 'axios';

const AxiosPokemonApi = () => {

    let [pokemon, setPokemon] = useState([])

    //using a this fucntion to activite the fetch
    const handleSubmit = () => {
        console.log("submit test");

        // feting the data from the API
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
            .then((response) => {
                console.log("This is our API fetch results ", response);
                setPokemon(response.data.results);
            })
            .catch((err) => {
                console.log("We could not fetch the data", err);
            })
    }




    return (
        <div>
            <button onClick={handleSubmit}>Fetch Pokemon</button>
            <div>
            {
                    pokemon.map((onePokemonObj, index) => {
                        return (
                            <div key={index}>
                                <p>
                                    {onePokemonObj.name}
                                </p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )

}

export default AxiosPokemonApi;