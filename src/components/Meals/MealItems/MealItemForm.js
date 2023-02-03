import { useContext, useState } from "react";
import { AppStore } from "../../../Store/Store";
import { RoseButton } from "../../UI/Button";

const MealItemForm = (props) => {
  const appCtx = useContext(AppStore);

  const [itemCount, setItemCount] = useState(1);

  const submitHandler = (event) => {
    event.preventDefault();
    let total = itemCount * 1;

    let newObj = {};

    let findObj = appCtx.mealArray.find((meal) => {
      return meal.id === props.meal.id;
    });

    console.log(findObj);
    let index = appCtx.mealArray.indexOf(findObj);
    let newArray = appCtx.mealArray;

    if (findObj) {
      total = findObj.totalCount + total;
      newObj = {
        id: props.meal.id,
        name: props.meal.name,
        price: props.meal.price,
        totalCount: total,
      };
      newArray[index] = newObj;
      console.log(newArray);
      appCtx.setMealArray(newArray);
    } else {
      newObj = {
        id: props.meal.id,
        name: props.meal.name,
        price: props.meal.price,
        totalCount: total,
      };
      appCtx.setMealArray((prevMealArray) => {
        return [newObj, ...prevMealArray];
      });
    }

    setItemCount(1);
  };

  const changeHandler = (event) => {
    setItemCount(event.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="">
        <label className="font-bold mx-1">Amount</label>
        <input
          type="number"
          min={1}
          max={5}
          step={1}
          value={itemCount}
          className="border-2 border-black"
          onChange={changeHandler}
        />
      </div>
      <div className="flex justify-center">
        <RoseButton> <button className=""> +Add </button></RoseButton>
      </div>
    </form>
  );
};

export default MealItemForm;
