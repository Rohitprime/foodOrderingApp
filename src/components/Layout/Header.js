import Meal from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";


const Header = (props) => {

  

  return (
    <>
     
      <header className="w-screen h-16 bg-rose-900  flex justify-around font-serif block text-white  z-20 fixed top-0 left-0 right-0">
        <h1 className="w-2/3 text-4xl font-bold my-2 ">PrimeMeals</h1>

        <HeaderCartButton/>
      </header>
      <div
        className={`relative z-10` }
        style={{ transformOrigin: "top left", transform: "rotate(-1.5deg)" }}
      >
        <img
          src={Meal}
          alt={"yummy meals"}
          className="w-screen h-96  origin-left"
        />
      </div>
    </>
  );
};

export default Header;
