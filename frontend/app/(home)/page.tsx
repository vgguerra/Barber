// Components
import Header from "@/app/_components/shared/header"
import Footer from "@/app/_components/shared/footer"
import HomePage from "./_components/HomePageView"

const Home = async () => {
  return (
    <div>
      {/* Cabeçalho */}
      <Header/>

      {/* Conteúdo principal */}
      <HomePage/>
    </div>
  )
}

export default Home
