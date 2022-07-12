import React, { useState } from "react";

const PokemonApi = () => {

    let [pokemon, setPokemon] = useState([])

    //using a this fucntion to activite the fetch
    const handleSubmit = () => {
        console.log("submit test");

        // feting the data from the API
        fetch("https://pokeapi.co/api/v2/pokemon")
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                console.log("This is our API fetch results ", response);
                setPokemon(response.results);
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

export default PokemonApi;