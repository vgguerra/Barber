import Image from "next/image"

const Banner = () => {
  return (
    <div className="relative mt-5 mb-3 h-37.5 w-full">
      <Image
        alt="Agende com os melhores da FSW"
        src="/banner-01.png"
        fill
        className="rounded-xl object-cover"
      ></Image>
    </div>
  )
}

export default Banner
