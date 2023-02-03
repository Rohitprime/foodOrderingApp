
import { useState } from "react";
import Header from "./components/Layout/Header";
import Meal from "./components/Meals/Meal"
import ShowCart from "./components/Cart/ShowCart";
import {AppStore} from "./Store/Store";

function App() {

  const[showCart, setShowCart] =useState(false)
  const[mealArray,setMealArray] = useState([]);


  return (
    <AppStore.Provider
     value={{
       setShowCart:setShowCart,
       setMealArray:setMealArray,
       mealArray:mealArray
      }}
    >
    <div className="w-auto min-h-screen m-0 bg-slate-800 bg-opacity-85">
       {showCart && <ShowCart />}
      <div className={`absolute z-10  ${showCart && "blur-sm"}`}>
        <Header/>
      </div>
      <div className={`absolute z-20 w-screen mt-64 ${showCart && "blur-sm "}`}>
        <Meal/>
      </div>
    </div>
    </AppStore.Provider>
  
  );
}

export default App;
