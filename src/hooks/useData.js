import axios from "axios";
import { useState } from "react";
export const useData = () => {
    const [weatherData, setWeatherData] = useState({});

    const getData = async (textoEscrito = "Loncoche, Chile") => {
        //creamos una funcionn para realizar nuestra peticion de tipo get.//le pasamos el parametro "nombre parametro" o si no por defecto mostrara Loncoche, Chile.
        const options = {
            method: "GET",
            url: "https://weatherapi-com.p.rapidapi.com/current.json",
            params: {
                q: textoEscrito,
            },
            headers: {
                "X-RapidAPI-Key": `${import.meta.env.VITE_APIKEY}`, //llamamos a la key desde un archivo .env
                "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
            },
        };

        try {
            const response = await axios.request(options);
            setWeatherData(response.data);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return { getData, weatherData }//devolvemos el getData que utilizamos en el searchInput y el weatherData.

}
