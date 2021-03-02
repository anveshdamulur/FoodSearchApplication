
import React, {useState} from 'react'
import axios from 'axios';
import './App.css'

import Recipes from './Components/Recipes';
import Alert from './Components/Alert';
const App = () => {

 
  const [query, setQuery] = useState('');
  const [recipe, setRecipe] = useState([]);
  const [alert, setAlert] = useState("");
  const APP_ID = '55d6e92e';
  const APP_KEY ='1960561eac635a194adf3f7db47418a6'	
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
  

  const handleChange=(e)=>{
      setQuery(e.target.value);
  }
  const getData = async () => {
    if(query !== ''){
      const results = await axios.get(url);
      if(!results.data.more){
        return setAlert("No food found for your search")
      }
      setRecipe(results.data.hits)
      setAlert("");
      setQuery("");
    }
    else{
      setAlert('Please Fill the form !!!')
    }
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    getData();
    }
    return (
    <div className="App">
        <div className="App-header">
                <div className="app-title text-center">
                    <h1>FOOD SEARCHING APP</h1>
                </div>
                <div className="app-search">
                    <form className="search-form" onSubmit={handleSubmit}>
                      {alert !== '' && <Alert alert ={alert}/>}
                      <input id="search" type="text" class="form-control" placeholder="Search Food like pizza, burger, biryani" autoComplete='off' onChange={handleChange}></input>                
                      <input type="submit" class="form-control" value="Search"/>
                    </form>
                </div>
        </div>      
        <div className="app_recipes">
            { recipe !== [] && recipe.map((item,index)=>{
              return(
                <div key={index}>
                    <Recipes recipe={item}/>
                </div>
                )
              })
            }
        </div>
    </div>
  )
}

export default App
