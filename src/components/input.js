import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/actions/actions';

const Input = () => {
    const dispatch = useDispatch();

    const [product, setProduct] = useState({})

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column'
    }

    return (
        <div style={containerStyle}>
            <input type="text" value={product.name} onChange={(e) => setProduct({...product, 'name': e.target.value})} placeholder="Product name" />
            <input type="number" value={product.price} onChange={(e) => setProduct({...product, 'price': e.target.value})} placeholder="Product price" />
            <button onClick={() => dispatch(addProduct(product))}>Submit</button>
        </div>
    );
}

export default React.memo(Input)