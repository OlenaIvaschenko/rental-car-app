import { Car } from "@/types/car";
import { directApi } from "./api";
import { NextServer } from "next/dist/server/next";

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
export interface Filters{
  brand:string;
  rentalPrice:string;
  minMileage:string;
  maxMileage:string
}


export async function getCars(
  page: number,
  perPage: number,
  filters:Filters
) {
  try {
    const resp = await directApi.get<CarResponse>(`/cars`,
      {
        params: {
          page,
          perPage,
          ...filters
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

export async function getBrands (){
  const resp=await directApi.get<string[]>(`/brands`)
  return resp.data
}

// export interface BrandsHttpResponse {
//   brands: string[];
//   // notes: Note[]; треба додати правильну типізацію
//   totalPages: number;
// }
// export async function fetchBrands(
//   search: string,
//   page: number,
//   brands: string[]
// ) {
//   try {
//     const response = await NextServer.get<BrandsHttpResponse>("/brands", {
//       params: {
//         page,
//         perPage: 12,
//         ...(brands && { brands }),
//       },
//     });
//     return response.data;
//   } catch {
//     throw new Error("Fetch tasks failed");
//   }
// }