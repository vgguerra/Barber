import { notFound } from "next/navigation"
import { getBarberByID } from "./services/getBarberByID"
import Image from "next/image"
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react"
import { Button } from "@/app/_components/ui/button"
import Link from "next/link"

const BarberShopPage = async ({
  params,
}: {
  params: Promise<{ id: string }>
}) => {
  const { id } = await params

  let barbershop

  try {
    barbershop = await getBarberByID(id)
  } catch (error) {
    notFound()
  }

  return (
    <div>
      {/* Imagem */}

      <div className="relative h-62.5 w-full">
        <Image
          src={barbershop.imageUrl}
          alt={barbershop.name}
          fill
          className="h-full w-full object-cover"
        />

        {/* Botão de voltar */}

        <Link href="/">
          <Button
            size="icon"
            variant="secondary"
            className="absolute top-4 left-4"
            asChild
          >
            <ChevronLeftIcon />
          </Button>
        </Link>

        {/* Botão de Menu */}

        <Button
          size="icon"
          variant="secondary"
          className="absolute top-4 right-4"
        >
          <MenuIcon />
        </Button>
      </div>

      {/* Informações da barbearia */}

      <div className="border-b border-solid p-5">
        <h1 className="mb-3 text-xl font-bold">{barbershop.name}</h1>

        <div className="item-center mt-2 mb-2 flex gap-2">
          <MapPinIcon className="text-primary" />
          <p className="text-s text-gray-400">{barbershop.address}</p>
        </div>

        <div className="item-center mt-2 flex gap-2">
          <StarIcon className="text-primary fill-primary" />

          {/* TODO: Substituir por avaliações reais (Precisa implementar feature de realizar a avaliação) */}
          <p className="text-s text-gray-400">5,0 - 100 avaliações</p>
        </div>
      </div>

      {/* Descrição da barbearia */}

      <div className="space-y-3 border-b border-solid p-5">
        <h2 className="font-bold text-gray-400 uppercase">Sobre nós</h2>
        <p className="text-sm text-justify">{barbershop.description}</p>
      </div>
    </div>
  )
}

export default BarberShopPage
