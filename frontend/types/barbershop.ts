export interface BarberShopService {
  id: string
  name: string
  description: string
  imageUrl: string
  price: number
}

export interface BarberShop {
  id: string
  name: string
  address: string
  phones: string[]
  description: string
  services: BarberShopService[]
  imageUrl: string
}
