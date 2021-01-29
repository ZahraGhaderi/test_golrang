import React, { useEffect,useState } from 'react';
import './Home.css';
import List from './List/List-items/List';
import Header from './Header/Header';
import {Autocomplete} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';


const Home = (props) =>{

  const[listItem,setListItems]=useState([]);
  const[itemHolder,setItemHolder]=useState([]);

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(Response=>{
      setListItems(Response.data);
      setItemHolder(Response.data);
    })
   
    
  }, [])

  useEffect(()=>{ 
    
  }, [listItem])

    const ComboBox=(event)=>{
      const newArray = itemHolder.filter((item)=>{
          const itemData = item.title.toUpperCase();
          const searchData = event.target.value.toUpperCase();
          return itemData.indexOf(searchData) > -1;
      })
      console.log(newArray)
      setListItems(newArray);
      
      
    }

    return(
        <div className="background">
          <div className="context">
            <Autocomplete
              id="combo-box-demo"
              options={listItem}
              getOptionLabel={(option) => option.title}
              className="comboBox"
              renderInput={(params) => <TextField {...params} label="Search Title" variant="outlined" 
              onChange={ComboBox} onSelect={ComboBox}/>}
            />
          </div>
         

          <Header/>
          <List listItem={listItem}/>
        </div>
    )
}

export default Home;