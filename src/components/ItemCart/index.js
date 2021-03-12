import React from 'react';

const ItemCart = ({ item, removeItemCart }) => {
    return (
        <div className="col-sm-3 mt-3">
            <div className="card text-white bg-primary mb-3"> 
                <div className="card-header">{item.name}</div>
                <div className="card-body" style={{ padding: 0 }}>
                    <img src={item.url} alt={item.name} style={{ width: '100%' }} />
                </div>
                <button 
                    className="btn btn-danger" 
                    onClick={() => removeItemCart(item._id)}
                    style={{ width: 50, position: 'absolute', bottom: 15, right: 15 }}
                    > 
                    <i className="fa fa-trash fa-2x"/>
                </button>
            </div>
        </div>
    );
}

export default ItemCart;