import React from 'react'
import ProductData from './ProductData'
import ProductInfor from './ProductInfor'

function Product(){
    const DataComponents = ProductData.map(item => <ProductInfor key={item.id} product={item} />)
    return(
        <div>
        {DataComponents}
        </div>
    )
}
export default Product