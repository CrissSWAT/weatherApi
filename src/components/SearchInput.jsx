import { useEffect, useState } from "react";

const SearchInput = ({ getData }) => {
  const [inputValue, setInputValue] = useState(""); //se agrega un string vacio al input value.
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value); //el handlechang cambiar segun lo que obtenega del input value.
    setErrorMessage("");
  };

  const handleSubmit = (event) => {
    event.preventDefault(); //este prevent default es para evitar que se recargue la pagina/(envia la informacion).
    if (inputValue != "") {
      getData(inputValue); //agregamos el get data para que le pase los valores capturados
    } else {
      setErrorMessage("Error, no puede estar Vacio!");
      return;
    }
  };

  useEffect(() => {
    getData(); //llamamos al getData
  }, []); //se ejecutara una sola vez al colocarle un arreglo vacio. es una arreglo de dependencia y se ejecuta segun las dependencias que tenga

  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* se crea siempre un formulario para un input text */}
        <input
          type="text"
          placeholder="Ciudad"
          value={inputValue}
          onChange={handleChange}
        />
        <p>{errorMessage}</p>
      </form>
    </>
  );
};

export default SearchInput;
