import React from 'react';
import './Item.css';

const Item = (props) => {
    return(
        <div className="items">
            <p>{props.userid}</p>
            <p>{props.id}</p>
            <p>{props.title}</p>
            <p>{props.body}</p>
        </div>
    )
} 

export default Item;