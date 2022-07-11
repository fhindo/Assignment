import React, { useState } from "react";


const BoxForm = () => {

    let [color, setColor] = useState("");
    let [num, setNum] = useState(0);
    let [box, setBox] = useState([]);

    const addBox = (e) => {
        e.preventDefault();
        let newBox = { color, num };
        // console.log(newBox);
        setBox([...box, newBox]);

    }
    return (
        <div>
            <form onSubmit={addBox}>
                <div>
                    <label>Color</label>
                    <input type="text" onChange={(e) => setColor(e.target.value)}></input>
                </div>
                <div>
                    <label>Box Size</label>
                    <input type="number" onChange={(e) => setNum(e.target.value)} min="100" max="500"></input>
                    {
                    parseInt(num) > 100 && parseInt(num) < 501 ? null : <p>"box size must be between 100 to 500"</p>
                    }
                </div>
                <button type="submit"> add box</button>
            </form>
            <hr></hr>
            <div className="main-box">
                {
                    box.map((oneBox, index) => {
                        return (
                            <div className="box" key={index} style={{ backgroundColor: oneBox.color, height: parseInt(oneBox.num), width: parseInt(oneBox.num) }}>
                                {/* {oneBox.color}
                        {oneBox.num} */}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default BoxForm