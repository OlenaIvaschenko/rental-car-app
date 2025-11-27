import css from "./List.module.css"
import CarInfoItem from "../Item/Item"
// import Car from "@/types/car"

export default function CarList (){
const cars=["1", "2", "3"]
return (
    
    <div className={css.listContainer}>
        <ul className={css.list}>
      {cars.map((car, index) => {
        return (
          <li key={index} className={css.listItem}>
            <CarInfoItem />
          </li>
        );
      })}
    </ul>
    </div>
)
}