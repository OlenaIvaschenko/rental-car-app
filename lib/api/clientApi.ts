import { Car } from "@/types/car";
import { directApi } from "./api";

export interface CarResponse {
  cars: Car[];
  totalPages: number;
  totalCars: number;
  page: string;
}


// export const getCars=async(
//     // page:number, perPage:number
// )=> {
//   const resp = await directApi.get<CarResponse>(`/cars`);
//   console.log(resp.data);
//   return resp.data;
// }



export async function getCars(
  page: number,
  perPage: number=12,
  
) {
  try {
    const resp = await directApi.get<CarResponse>(`/cars`,
      {
        params: {
          page,
          perPage,
        },
      }
    );

    console.log(resp.data);
    

    return resp.data;
  } catch {
    throw new Error("Fetch tasks failed");
  }
}

export  async function getCarById (id:string){
const resp= await directApi.get<Car>(`/cars/${id}`)

console.log(resp.data);


return resp.data
}