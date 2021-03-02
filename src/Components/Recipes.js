import React,{useState} from 'react'
import Ingredients from './Ingredients';
import './recipeStyle.css'
const Recipes = ({recipe}) => {
    const [show, setShow] = useState(false);  
    const {label, image, url, ingredients} = recipe.recipe;
    return (
        <div className="recipe">
            {
                (recipe !== null)&& (
                    <div className="card-deck">
                        <div className="card"> 
                            <div className="card-header">
                                <h2  style={{fontSize:'1.5rem'}}>{label}</h2>
                            </div>
                            <div className="card-image">
                                <img style={{width:'100%', height:'50vh'}} src={image} alt="label" target="_blank" rel="noopener"/>
                            </div>
                            <div className="card-body">
                                <span><a style={{textDecoration:'none'}} href={url} target="_blank" rel="noreferrer">url</a></span>                  
                            </div>
                            <div className="card-footer">
                                <button onClick={()=>setShow(!show)} className="btn btn-primary">Ingredient</button>
                                {show && <Ingredients ingredient={ingredients}/>}
                            </div>                
                        </div>  
                    </div>
                   
                )
            }           
        </div>
    )
}

export default Recipes
