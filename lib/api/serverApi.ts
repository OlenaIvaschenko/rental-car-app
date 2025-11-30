import { Car } from "@/types/car";
import { directApi } from "./api";

export  async function getCarById (id:string){
const resp= await directApi.get<Car>(`/cars/${id}`)

console.log(resp.data);


return resp.data
}
