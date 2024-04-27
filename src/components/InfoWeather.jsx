export const InfoWeather = ({ weatherData }) => {
  return (
    <>
      <h1>{weatherData.location?.country} </h1>
      <h2>{weatherData.location?.name} </h2>
      <h2>{weatherData.location?.region} </h2>
      <p>{weatherData.location?.localtime} </p>
      <h2>{weatherData.current?.temp_c} </h2>
      <img src="" alt="" />
      <p>{weatherData.current?.feelslike_c} </p>
      <p>{weatherData.current?.wind_kph} </p>
      <p>{weatherData.lcurrent?.humidity} </p>
      <p>{weatherData.location?.lat}</p>
      <p>{weatherData.location?.lon}</p>
    </>
  );
};
