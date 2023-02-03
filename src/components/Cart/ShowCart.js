import { useContext, useState } from "react";
import {AppStore} from "../../Store/Store";
import Card from "../UI/Card";
import Model from "../UI/Model";
import CartForm from "./CartFrom";
import {WhiteButton,RoseButton} from "../UI/Button";


const ShowCart = (props) => {
  
  const ctx = useContext(AppStore)
  const[order,setOrder] = useState(false)

  const onClickHandler = () => {
    ctx.setShowCart(false);
  };

  let totalPrice = 1*0;
 
  ctx.mealArray.forEach(meal =>{
    totalPrice= + (meal.price*meal.totalCount)+totalPrice
  })

  const ordeHandler = ()=>{
    setOrder(true)
     ctx.setMealArray([])

  }
  

  return (
     <Model>
      <div className="w-1/3 shadow-2xl shadow-rose-500/50">
        <Card>
          {
            !order && ctx.mealArray.length===0 && <div className="bg-rose-800 border p-4 text-white font-serif font bold text-lg">
              Your Card Is Empty !!
            </div>
          }
          {
            ctx.mealArray.length===0 && order && <div className="bg-rose-800 border p-4 text-white font-serif font bold text-lg">
            Your Order Is In Process !!
            </div>
          }
          <div className=" p-2 shadow-inner">
          {
            
            ctx.mealArray.map((meal)=>{
              return (
                <div key={meal.id} className="my-2 snap-start pb-2 border-b-2">
                  <div className="font-serif font-bold">
                    <span>{meal.name}</span>
                    </div>
                  <div className="font-xl font-bold flex justify-between my-2">
                    <div>
                        <span className="text-rose-800 font-bold"><span>&#8377;</span>{meal.price}</span>
                        <span className="bg-rose-800 rounded-2xl py-1 px-2 text-center mx-1 text-white"> x{meal.totalCount}</span>
                    </div>
                    <div>
                     <CartForm meal={meal}/>
                    </div>
                  </div>
                </div>
                  
              )
            })
          }
          </div>
               <div className="font-xl font-bold flex justify-between my-2">
                    <span className="text-lg">Total Amount</span>
                    <span className="text-rose-800 font-bold"><span>&#8377;</span>{totalPrice.toFixed(2)}</span>
                  </div>
                  <hr/>
      
          <div className="flex justify-end mt-2">
            <WhiteButton> <button  onClick={onClickHandler}> close</button></WhiteButton>
            <RoseButton> <button onClick={ordeHandler}> order   </button> </RoseButton>
          </div>
        </Card>
      </div>
      </Model>
  );
};

export default ShowCart;
