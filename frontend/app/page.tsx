"use client"

import { SearchIcon } from "lucide-react"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import Image from "next/image"

const Home = () => {
  return <div>
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

      <div className="relative w-full h-37.5">
        <Image alt='Agende com os melhores da FSW' src="/banner-01.png" fill className="rounded-xl object-cover" ></Image>
      </div>

    </div>

  </div>
}

export default Home
