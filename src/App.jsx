import { InfoWeather } from "./components/InfoWeather";
import SearchInput from "./components/SearchInput";
import { useData } from "./hooks/useData";

const App = () => {
  const { getData, weatherData } = useData(); //devolvemos la informacion del get data.
  return (
    <>
      <SearchInput getData={getData} />{" "}
      {/* el padre le pasa los props al hijo  */}
      <InfoWeather weatherData={weatherData} />
    </>
  );
};

export default App;
