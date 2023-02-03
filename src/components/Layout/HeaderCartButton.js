import cart from "../../assets/cart1.gif";
import {AppStore }from "../../Store/Store";
import React, {  useContext, useEffect, useState } from "react";

const HeaderCartButton = () => {

    const ctx = useContext(AppStore)
  const [style,setStyle] = useState(false)

  useEffect(()=>{

    if(ctx.mealArray.length===0) return

    setStyle(true)

   const timeOut = setTimeout(()=>{
         setStyle(false)
    },300)

    return ()=>{
      clearTimeout(timeOut)
    }
    
  },[ctx.mealArray])

  const clickHandler = () => {
     ctx.setShowCart(true)
  };

  return (
    <>
      <button
        onClick={clickHandler}
        className={`text-white w-48 font-serif h-8 my-3 mx-3 py-3 rounded-xl bg-black bg-opacity-75 flex justify-around items-center 
        ${ style && "scale-110 transition duration-150 ease-in-out"}`}
      >
        <div className="w-6 h-6 bg-white">
          <img src={cart} alt="cart" />
        </div>
        <div>YourCart</div>
        <div className="bg-rose-800 rounded-2xl w-1/6 text-center mx-2 pb-1">
          {ctx.mealArray.length}
        </div>
      </button>
    </>
  );
};

export default HeaderCartButton;
