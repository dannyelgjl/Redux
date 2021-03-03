// import {} from 'react';
import { useSelector } from 'react-redux';

const List = () => {
  const cars = useSelector(state => state);

  return (
    <div>
      {cars.map(car => (
        <li key={car.id}>
          <strong>{car.name}</strong>
        </li>
      ))}
    </div>    
  );
}

export default List;