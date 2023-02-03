import { Fragment } from "react"
import AvailiableMeal from "./AvailiableMeal"
import MealSummery from "./MealSummery"

const Meal = ()=>{
    return(
        <Fragment>
                <MealSummery /> 
                <AvailiableMeal/>
        </Fragment>
    )
}

export default Meal