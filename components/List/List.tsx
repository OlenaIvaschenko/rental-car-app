import css from "./List.module.css"
import CarInfoItem from "../Item/Item"
import { Car } from "@/types/car"
// import Car from "@/types/car"

interface Props{
  allCars:Car[];
}

export default function CarList ({allCars=[]}:Props){
// const cars=["1", "2", "3"]
return (
    
    <div className={css.listContainer}>
        <ul className={css.list}>
      {allCars.map((car, index) => {
        return (
          <li key={index} className={css.listItem}>
            <CarInfoItem car={car}/>
          </li>
        );
      })}
    </ul>
    </div>
)
}