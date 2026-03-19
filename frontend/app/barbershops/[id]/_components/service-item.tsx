import Image from "next/image"
import { BarberShopService } from "@/types/barbershop"
import { Button } from "@/app/_components/ui/button"
import { Card, CardContent } from "@/app/_components/ui/card"

interface ServiceItemProps {
  service: BarberShopService
}

export default function ServiceItem({ service }: ServiceItemProps) {
  return (
    <Card>
      <CardContent className="flex items-center gap-3">
        {/* Imagem do serviço */}
        <div className="relative h-24 w-20 flex-shrink-0 overflow-hidden rounded-lg">
          <Image
            src={service.imageUrl}
            alt={service.name}
            fill
            className="object-cover"
          />
        </div>
        {/* Informações do serviço */}
        <div className="flex-1 space-y-2">
          <h3 className="text-s font-semibold text-gray-300">{service.name}</h3>
          <p className="text-sm text-gray-400">{service.description}</p>
          {/* Botão + preço abaixo */}
          <div className="flex items-center justify-between pt-2">
            <Button variant="secondary" size="sm">
              Reservar
            </Button>
            <p className="text-primary text-sm font-bold">
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(Number(service.price))}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
