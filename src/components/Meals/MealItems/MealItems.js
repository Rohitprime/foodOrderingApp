import MealItemForm from "./MealItemForm"


const MealItems = props =>{

    let price = props.meal.price
    return(
     
        <div className="flex justify-between border-b-2">
           <ul className="p-5 w-10/12">
            <li className="font-bold text-lg">{props.meal.name}</li>
            <li className="font-serif">{props.meal.description}</li>
            <li className="text-orange-700 font-bold"><span>&#8377;</span>{price.toFixed(2)}</li>
           </ul>
           <div className="w-2/12 my-5">
            <MealItemForm meal={props.meal}/>
           </div>
           <hr/>
        </div>
     
    )
}

export default MealItems