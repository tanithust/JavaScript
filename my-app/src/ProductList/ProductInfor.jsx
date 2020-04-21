import React from 'react'
function ProductInfor(props){
    return(
        <div>
        <h4>Name: {props.product.name}</h4>
        <h4>Price: {props.product.price} $ </h4>
        Description : {props.product.description}
        </div>
    )
}
export default ProductInfor