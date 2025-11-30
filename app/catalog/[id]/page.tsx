import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import CarClient from "./Car.client";
import { getCarById } from "@/lib/api/serverApi";


type Props = {
  params: Promise<{ id: string }>;
};



const CarDetails = async ({ params }: Props) => {
  const { id } = await params;
  //    console.log('car id:', id);
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["car", id],
    queryFn: () => getCarById(id),
  });


  return (
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <CarClient />
      </HydrationBoundary>
    </>
  );
};

export default CarDetails;
