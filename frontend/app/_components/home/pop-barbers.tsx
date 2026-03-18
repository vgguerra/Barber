// Components
import BarberShopItem from "@/app/_components/home/barbershop-item"

// Types
import { BarberShop } from "@/types/barbershop"

type Props = {
  popularBarbers: BarberShop[]
}

const PopBarbers = ({ popularBarbers }: Props) => {
  return (
    <>
      <div>
        <h2 className="mt-6 mb-3 text-xs font-bold text-gray-400 uppercase">
          Populares
        </h2>

        <div className="hide-scrollbar flex gap-4 overflow-x-auto py-2">
          {popularBarbers.map((barbershop: BarberShop) => (
            <BarberShopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
    </>
  )
}

export default PopBarbers
