import { BarberShop } from "@/types/barbershop"
import BarberShopItem from "./barbershop-item"

interface BarberShopSectionProps {
  title: string
  barbershops: BarberShop[]
}

const BarberShopSection = ({ title, barbershops }: BarberShopSectionProps) => {
  return (
    <section className="mb-6">
      <h2 className="mt-6 mb-3 text-xs font-bold text-gray-400 uppercase">{title}</h2>
      <div className="hide-scrollbar flex gap-4 overflow-x-auto py-2">
        {barbershops.length === 0 ? (
          <p className="text-sm text-gray-500">Nenhuma barbearia encontrada.</p>
        ) : (
          barbershops.map((barbershop) => (
            <BarberShopItem key={barbershop.id} barbershop={barbershop} />
          ))
        )}
      </div>
    </section>
  )
}

export default BarberShopSection
