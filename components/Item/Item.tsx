import Image from "next/image";
import css from "./Item.module.css"
export default function CarInfoItem (){
return (
    <div>
        <Image
        src={"https://cdn.pixabay.com/photo/2025/02/25/07/52/suv-9429777_1280.jpg"}
       
        alt="Photo of car"
        width={276}
        height={268}
        // sizes="(max-width: 768px) 100vw, 50vw"
        className={css.avatar}
      />
    </div>
)
}