import { SearchIcon } from "lucide-react"


import Image from "next/image"

// UI Components
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import { Card, CardContent } from "./_components/ui/card"

// Components
import BookingItem from "@/app/_components/booking-item"
import BarberShopItem from "@/app/_components/barbershor-item"
import Header from "./_components/header"

// Types
import { BarberShop } from "@/types/barbershop"
import { quickSearchoption } from "./_constants/quickSearch"

const Home = async () => {
  const barberShops: BarberShop[] = await fetch(
    "http://localhost:8080/barber-shops",
    {
      cache: "no-store",
    },
  )
    .then((res) => res.json())
    .catch(() => [])

  // TODO: Adicionar lógica de barbearias mais populares no DB
  const popularBarbers: BarberShop[] = await fetch(
    "http://localhost:8080/barber-shops",
    {
      cache: "no-store",
    },
  )
    .then((res) => res.json())
    .catch(() => [])

  popularBarbers.sort((a, b) => a.name.localeCompare(b.name))

  return (
    <div>
      <Header></Header>
      <div className="p-5">
        <h2 className="text-2xl font-bold">Olá, Guerra!</h2>
        <p>Segunda-Feira, 05 de Agosto.</p>

        {/* Busca */}
        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Buscar"></Input>
          <Button>
            <SearchIcon></SearchIcon>
          </Button>
        </div>

        {/* Busca Rápida */}

        <div className="hide-scrollbar mt-6 flex gap-3 overflow-x-scroll">
          {quickSearchoption.map((option) => (
            <Button key={option.title} className="gap-2" variant="secondary">
              <Image
                src={option.imageUrl}
                width={16}
                height={16}
                alt={option.title}
              />
              {option.title}
            </Button>
          ))}
        </div>

        {/* Banner */}
        <div className="relative mt-5 mb-3 h-37.5 w-full">
          <Image
            alt="Agende com os melhores da FSW"
            src="/banner-01.png"
            fill
            className="rounded-xl object-cover"
          ></Image>
        </div>

        {/* Agendamento */}
        <BookingItem></BookingItem>

        {/* Barbearias */}
        <h2 className="mt-6 mb-3 text-xs font-bold text-gray-400 uppercase">
          Recomendados
        </h2>

        <div className="hide-scrollbar flex gap-4 overflow-x-auto py-2">
          {barberShops.map((barbershop: BarberShop) => (
            <BarberShopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>

        {/* Populares */}
        <h2 className="mt-6 mb-3 text-xs font-bold text-gray-400 uppercase">
          Populares
        </h2>

        <div className="hide-scrollbar flex gap-4 overflow-x-auto py-2">
          {popularBarbers.map((barbershop: BarberShop) => (
            <BarberShopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>

      <footer>
        <Card>
          <CardContent className="px-3 py-2">
            © 2023 Copyright <span className="font-bold">FSW Barber</span>
          </CardContent>
        </Card>
      </footer>
    </div>
  )
}

export default Home
