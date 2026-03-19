import { BarberShop } from "@/types/barbershop"

export async function getBarberByID(id: string): Promise<BarberShop> {
  const res = await fetch(`http://localhost:8080/barber-shops/${id}`)

  if (!res.ok) {
    throw new Error(`Barbearia não encontrada [${res.status}]`)
  }

  const barberShop: BarberShop = await res.json()
  return barberShop
}
