import React, { useEffect } from 'react';
import Item from '../Item/Item';
import './List.css';


const List = (props) => {
    useEffect(()=>{

    },[props.listItem])
    let items = props.listItem.map((item,index)=>
        <Item 
            key={index}
            userid={item.userId}
            id={item.id}
            title={item.title}
            body={item.body}
        />
    )

    return(
        <div className="container">
            {items}
        </div>
    )
} 

export default List;