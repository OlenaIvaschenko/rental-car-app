import Image from "next/image";
import css from "./Item.module.css"
import Link from "next/link";
import { Car } from "@/types/car";

interface Props{
  car:Car
}

export default function CarInfoItem ({car}:Props){

  const lastTwo = car.address.split(", ").map(p => p.trim()).slice(-2);
return (
  <div className={css.cardContainer}>
    <div className={css.imageWrapper}>
        <Image
        src={car.img}
       
        alt="Photo of car"
        width={276}
        height={268}
        // sizes="(max-width: 768px) 100vw, 50vw"
        className={css.image}
      />
    </div>
    <div className={css.carNamePriceWrapper}>
      <h2 className ={css.carName}>{car.brand}<span className={css.span}> {car.model}</span>, {car.year}</h2>
      <p className={css.carName}>{car.rentalPrice} $</p>
    </div>
    <div className={css.infoWrapper}>
      <p className={css.text}>{lastTwo.join(" | ")}  {car.rentalCompany} |</p>
      <p className={css.text}>{car.type} | {car.mileage}</p>
    </div>
    <div>
      <Link
      className={`${css.buttonEfect} ${css.link}`}
      href={`/catalog/${car.id}`}
      >
      Read more
      </Link>
    </div>
</div>
)
}