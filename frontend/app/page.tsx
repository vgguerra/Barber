"use client"

import { SearchIcon } from "lucide-react"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import { Card, CardContent } from "./_components/ui/card"
import {Badge} from "./_components/ui/badge"
import {Avatar, AvatarImage} from "./_components/ui/avatar"
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

      <div className="mt-6 relative w-full h-37.5">

        <Image alt='Agende com os melhores da FSW' src="/banner-01.png" fill className="rounded-xl object-cover" ></Image>

      </div>

      <Card className="mt-6">
          <CardContent className='flex justify-between p-0'>

            {/* Esquerda */}
            <div className="flex flex-col gap-2 py-5 pl-5">

                <Badge className='w-fit'>Confirmado</Badge>
                <h3 className="text-lg font-semibold">Corte de cabelo</h3>
                <div className='flex item-center gap-2'>
                    <Avatar className='h-6 w-6'>
                      <AvatarImage src="/logo.png" />
                    </Avatar>
                    <p className='text-sm'>Barbearia FSW</p>
                </div>

            </div>

            {/* Direita */}  
            <div className="flex flex-col items-center justify-center px-5 border-l-2 border-solid border-gray-300 h-100%">

              <p className='text-sm'>Agosto</p>
              <p className='text-2xl'>05</p>
              <p className='text-sm'>20:00</p>

            </div>
            
          </CardContent>

        </Card>

    </div>

  </div>
}

export default Home
