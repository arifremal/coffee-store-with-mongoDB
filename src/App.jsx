
import { useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeCard from "./Components/CoffeCard";

function App() {
  const coffees =useLoaderData()
  return (
  <div className="m-20">

      <h1 className="text-6xl text-center text-purple-300 my-20" >Coffees Collections</h1>
      <div className="grid md:grid-cols-2 gap-4" >
      {
        coffees.map(coffee=><CoffeCard key={coffee._id}
          coffee={coffee} ></CoffeCard>)
      }
 

      </div>
  </div>
  );
}

export default App;
