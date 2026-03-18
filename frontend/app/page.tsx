"use client"

import { SearchIcon } from "lucide-react"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import { Card, CardContent } from "./_components/ui/card"
import { Badge } from "./_components/ui/badge"
import { Avatar, AvatarImage } from "./_components/ui/avatar"
import Image from "next/image"

const Home = () => {
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

        {/* Agendamento */}
        <h2 className="text-xs font-bold text-gray-400 uppercase mb-3">
          Agendamentos
        </h2>

        <Card >
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
      </div>
    </div>
  )
}

export default Home
