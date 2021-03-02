import React from 'react'
const Ingredients = ({ingredient}) => {
   console.log(ingredient)
    return(
        <div>
             {ingredient && ingredient.map((item,index)=>(
                    <ul key={index}>
                        <li>text :{item.text}</li>
                        <li>Weight :{item.weight}</li>
                    </ul>
                ))
            }
        </div>
    )
  
}

export default Ingredients
