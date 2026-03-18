// Components
import BookingItem from "@/app/(home)/_components/booking-item"
import BarberShopSection from "@/app/(home)/_components/barbershop-section"
import QuickSearch from "@/app/(home)/_components/quick-search"
import Banner from "@/app/(home)/_components/banner"
import Search from "@/app/(home)/_components/search"
import Hello from "@/app/(home)/_components/hello"

// Types
import { BarberShop } from "@/types/barbershop"
import { quickSearchoption } from "@/app/_constants/quickSearch"

// Services
import getBarberShops from "@/app/(home)/_services/get_barbershops"



const HomePage = async () => {

  const barberShops: BarberShop[] = (await getBarberShops()) || []

  // TODO: Adicionar lógica de barbearias mais populares no DB
  const popularBarbers = [...barberShops].sort((a, b) =>
    a.name.localeCompare(b.name),
  )

    return ( 
        <div className="p-5">
        <Hello/>

        {/* Busca */}
        <Search/>

        {/* Busca Rápida */}
        <QuickSearch options={quickSearchoption} />

        {/* Banner */}
        <Banner/>

        {/* Agendamento */}
        <BookingItem/>

        {/* Barbearias recomendadas */}
        <BarberShopSection title="Recomendados" barbershops={barberShops} />

        {/* Barbearias populares */}
        <BarberShopSection title="Populares" barbershops={popularBarbers} />
      </div>
     );
}
 
export default HomePage;