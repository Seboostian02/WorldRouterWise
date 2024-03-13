import styles from "./CityList.module.css";
import Spinner from "../components/Spinner";
import CityiItem from "./CityItem";
import Message from "../components/Message";

function CityList({ cities, isLoading }) {
  if (isLoading) return <Spinner></Spinner>;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on the city from the map" />
    );
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityiItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
