
// UI Components
import { Card, CardContent } from "@/app/_components/ui/card"
import { Badge } from "@/app/_components/ui/badge"
import { Avatar, AvatarImage } from "@/app/_components/ui/avatar"


// TODO: Receber agendamento como prop
const BookingItem = () => {
  return (
    <>
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
    </>
  )
}

export default BookingItem
