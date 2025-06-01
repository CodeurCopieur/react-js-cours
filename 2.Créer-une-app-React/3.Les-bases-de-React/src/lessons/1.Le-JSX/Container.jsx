import React, { useState } from 'react';

function Container() {
    const [name, setName] = useState("Widwerk");
    const age = 20;
    const handleClick = (e) => {
        console.log("handleClick", e);
        alert("handleClick", e);
    }
    return (
        <div>
            <h1>Hello {name}</h1>
            <p>This is a container</p>
            <p>My name is {name.toUpperCase()}</p>
            <p>My age is {age}</p>
            <p>My name is {name.toUpperCase()} and my age is {age}</p>
            <p className="text-red-500">
                {name === "Widwerk" && <span>I'm John</span>}
            </p>
            <input 
                type="text" 
                placeholder="Enter your name" 
                value={name} 
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={() => alert("alert")}>onClick alert</button>
            <button onClick={handleClick}>onClick ChandleClick</button>
        </div>
    )
}

export default Container;