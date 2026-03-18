// Components
import Header from "@/app/_components/shared/header"
import Footer from "@/app/_components/shared/footer"
import BookingItem from "@/app/(home)/_components/booking-item"
import BarberShopSection from "@/app/(home)/_components/barbershop-section"
import QuickSearch from "@/app/(home)/_components/quick-search"
import Banner from "@/app/(home)/_components/banner"
import Search from "@/app/(home)/_components/search"
import Hello from "@/app/(home)/_components/hello"

// Types
import { BarberShop } from "@/types/barbershop"
import { quickSearchoption } from "@/app/_constants/quickSearch"

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
  const popularBarbers = [...barberShops].sort((a, b) =>
    a.name.localeCompare(b.name),
  )

  return (
    <div>
      <Header></Header>
      <div className="p-5">
        <Hello></Hello>

        {/* Busca */}
        <Search></Search>

        {/* Busca Rápida */}
        <QuickSearch options={quickSearchoption} />

        {/* Banner */}
        <Banner></Banner>

        {/* Agendamento */}
        <BookingItem></BookingItem>

        {/* Barbearias recomendadas */}
        <BarberShopSection title="Recomendados" barbershops={barberShops} />

        {/* Barbearias populares */}
        <BarberShopSection title="Populares" barbershops={popularBarbers} />
      </div>

      <Footer></Footer>
    </div>
  )
}

export default Home
