import { useContext, useState } from "react"
import { AppStore } from "../../Store/Store"

const CartForm = props =>{

    const appCtx = useContext(AppStore)
    const[inc , setInc]=useState(0)
    const[dec,setDec] = useState(0)

    const sumitHandler = (event)=>{  
        event.preventDefault()
    
         let newArray = []
         let index=0;
         appCtx.mealArray.forEach((meal)=>{
                if(meal.id === props.meal.id){
                   let total = meal.totalCount
                 
                       if(inc)
                         total=total+inc
                       else
                          total= total+dec
                     if(total>0){
                         newArray[index]={
                             id: props.meal.id,
                             name: props.meal.name,
                             price: props.meal.price,
                             totalCount: total,
                         }

                         index++
                     }
                   }
                else{
                   newArray[index]=meal
                   index++

                }
         })
         
          appCtx.setMealArray(newArray)
          setInc(0)
          setDec(0)
    }
   
  const increaseHandler = ()=>{
     setInc(1)
  }

  const decreaseHandler = ()=>{
    setDec(-1)
  }

    return (
        <form  onSubmit={sumitHandler}>
             <button className="border border-rose-800 text-rose-800 rounded-xl mx-1 px-4  hover:bg-rose-800 hover:text-white" onClick={increaseHandler} >+</button>
             <button className="border border-rose-800 text-rose-800 rounded-xl mx-1 px-4  hover:bg-rose-800 hover:text-white" onClick={decreaseHandler} >-</button>
        </form>
    )
}

export default CartForm