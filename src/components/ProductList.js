import React from 'react';
import { Link } from '@reach/router';

export default props => {
    console.log(props);
    return(
        <div>
            
            {props.product.map((product, index)=>{
                return <p key={index}><Link to ={"/product/" + product._id}> {product.title}</Link></p>

            })}
        </div>
    )
}