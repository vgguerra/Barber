import { Card, CardContent } from "@/app/_components/ui/card"
import { BarberShop } from "@/types/barbershop"
import { Button } from "@/app/_components/ui/button"
import { Badge } from "@/app/_components/ui/badge"
import Image from "next/image"
import { StarIcon } from "lucide-react"
import Link from "next/link"

interface BarberShopItemProps {
  barbershop: BarberShop
}

const BarberShopItem = ({ barbershop }: BarberShopItemProps) => {
  return (
    <Card className="relative max-w-55 min-w-55 overflow-hidden rounded-2xl">
      <CardContent className="p-0">
        {/* Imagem */}
        <div className="relative h-39.75 w-full">
          <Image
            fill
            className="rounded-2xl object-cover"
            src={barbershop.imageUrl}
            alt={barbershop.name}
          />

          <Badge className="absolute top-2 left-2" variant="secondary">
            <StarIcon size={12} className="fill-primary text-primary" />

            {/* TODO: Adicionar lógica de classificação no DB */}

            <span className="ml-1 space-x-1 text-xs font-semibold">5,0</span>
          </Badge>
        </div>

        {/* Texto */}

        <div className="px-1 py-3">
          <h3 className="truncate font-semibold">{barbershop.name}</h3>
          <p className="truncate text-sm text-gray-400">{barbershop.address}</p>
          <Button variant="secondary" className="mt-3 w-50 justify-center">
            <Link href={`/barbershops/${barbershop.id}`} className="w-full">
              Reservar
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default BarberShopItem
