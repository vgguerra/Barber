import Image from "next/image"
import { BarberShopService } from "@/types/barbershop"

interface ServiceItemProps {
  service: BarberShopService
}

export default function ServiceItem({ service }: ServiceItemProps) {
  return (
    <div className="rounded-xl border border-slate-200 p-4 shadow-sm transition hover:shadow-lg">
      <div className="flex items-start gap-3">
        <div className="relative h-16 w-16 overflow-hidden rounded-lg bg-slate-100">
          <Image
            src={service.imageUrl}
            alt={service.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-sm font-semibold text-gray-300">
            {service.name}
          </h3>
          <p className="mt-1 text-xs text-gray-500">{service.description}</p>
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <span className="text-base font-bold">
          R$ {service.price.toFixed(2)}
        </span>
        <button className="bg-primary hover:bg-primary-dark rounded-lg px-3 py-1 text-xs font-semibold text-white">
          Agendar
        </button>
      </div>
    </div>
  )
}
