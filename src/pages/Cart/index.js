import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../../store/ducks/cart';
import { addMessage } from '../../store/ducks/layout';
import ItemCart from '../../components/ItemCart';

export default function Cart() {
	const dispatch = useDispatch();
	const cart = useSelector(state => state.cart);

	const removeItemCart = (car) => {
		dispatch(removeItem(car._id));
		dispatch(addMessage(`${car.name} Removido com sucesso!!`));
	};
	
	return (
		<div className="container-fluid">
			<div className="row">
				{cart.length === 0 ? (
					<p className="col-sm-12 mt-5 text-warning text-center">Sem produtos no Carrinho...</p>
				) : (
					<>
					{cart.map(item => (
						<ItemCart key={item._id} item={item} removeItemCart={removeItemCart} />
					))}
					</>
				)}
			</div>
		</div>
	);
}
