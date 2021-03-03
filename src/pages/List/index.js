import React from 'react';
import Car from '../../components/Car';
import { useSelector } from 'react-redux';


export default function List() {
 const cars = useSelector(state => state.cars);

	return (
		<div className="container-fluid">
			<div className="row">{cars.map((car, index) => <Car key={index} car={car} />)}</div>
		</div>
	);
}
