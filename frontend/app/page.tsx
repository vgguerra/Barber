import { SearchIcon } from "lucide-react"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import { Card, CardContent } from "./_components/ui/card"
import { Badge } from "./_components/ui/badge"
import { Avatar, AvatarImage } from "./_components/ui/avatar"
import Image from "next/image"
import BarberShopItem from "@/app/_components/barbershor-item"

// Types
import { BarberShop } from "@/types/barbershop"

const Home = async () => {
  const barberShops: BarberShop[] = await fetch(
    "http://localhost:8080/barber-shops",
    {
      cache: "no-store",
    },
  )
    .then((res) => res.json())
    .catch(() => [])

  return (
    <div>
      <Header></Header>
      <div className="p-5">
        <h2 className="text-2xl font-bold">Olá, Guerra!</h2>
        <p>Segunda-Feira, 05 de Agosto.</p>

        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Faça sua busca"></Input>
          <Button>
            <SearchIcon></SearchIcon>
          </Button>
        </div>

        <div className="relative mt-6 mb-3 h-37.5 w-full">
          <Image
            alt="Agende com os melhores da FSW"
            src="/banner-01.png"
            fill
            className="rounded-xl object-cover"
          ></Image>
        </div>
        {/* <h2 className="mb-3 text-xs font-bold text-gray-400 uppercase">
          Barbearias
        </h2>

        <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          {barberShops.length === 0 ? (
            <p className="text-sm text-gray-500">
              Nenhuma barbearia encontrada.
            </p>
          ) : (
            barberShops.map((shop: any) => (
              <Card key={shop.id}>
                <CardContent className="px-4 py-4">
                  <h3 className="text-lg font-semibold">{shop.name}</h3>
                  <p className="text-sm text-gray-500">{shop.address}</p>
                  <p className="mt-1 text-sm">{shop.description}</p>
                </CardContent>
              </Card>
            ))
          )}
        </div> */}

        {/* Agendamento */}
        <h2 className="mb-3 text-xs font-bold text-gray-400 uppercase">
          Agendamentos
        </h2>

        <Card>
          <CardContent className="flex justify-between p-0">
            {/* Esquerda */}
            <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge className="w-fit">Confirmado</Badge>
              <h3 className="text-lg font-semibold">Corte de cabelo</h3>
              <div className="item-center flex gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="/logo.png" />
                </Avatar>
                <p className="text-sm">Barbearia FSW</p>
              </div>
            </div>

            {/* Direita */}
            <div className="h-100% flex flex-col items-center justify-center border-l-2 border-solid border-gray-300 px-5">
              <p className="text-sm">Agosto</p>
              <p className="text-2xl">05</p>
              <p className="text-sm">20:00</p>
            </div>
          </CardContent>
        </Card>

        {/* Barbearias */}
        <h2 className="mt-6 mb-3 text-xs font-bold text-gray-400 uppercase">
          Recomendados
        </h2>

        <div className="hide-scrollbar flex gap-4 overflow-x-auto py-2">
          {barberShops.map((barbershop: any) => (
            <BarberShopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
