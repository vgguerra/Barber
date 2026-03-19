import { notFound } from "next/navigation";
import { getBarberByID } from "./services/getBarberByID";

const BarberShopPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  let barbershop;

  try {
    barbershop = await getBarberByID(id);
  } catch (error) {
    notFound();
  }

  return (
    <h1>{barbershop.name}</h1>
  );
};

export default BarberShopPage;