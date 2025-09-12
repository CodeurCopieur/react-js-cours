import { useState, useMemo } from "react";

export default function Calculate() {
    const [temperature, setTemperature] = useState("");

    const celciusToFahrenheit = (deg) => {  
        return deg ? deg * 1.8 + 32 : "Entrez une température";
    }

    const fahrenheitToCelcius = useMemo(() => {
        console.log("fahrenheitToCelcius");
        return celciusToFahrenheit(temperature);
    }, [temperature]);

    console.log("render Calculate");
    return (
        <div>
            <h1>Calculate</h1>
            <input type="number" value={temperature} onChange={(e) => setTemperature(e.target.value)} />
            <p>la température en celcius est de {temperature}</p>
            <p>{temperature ? `la température en fahrenheit est de ${fahrenheitToCelcius}` : fahrenheitToCelcius}</p>
        </div>
    )
}