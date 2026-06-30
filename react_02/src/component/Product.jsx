import React from 'react';


const Product = ({name, img, des, price}) => {
    return (
        <div>
            <img className= "w-20" src={img} alt="Broom" />
            <h2>Name: {name}</h2>
            <h2>description: {des}</h2>
            <h2>Price: {price}</h2>
        </div>
    );
}

export default Product;


