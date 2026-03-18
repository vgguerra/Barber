export default async function getBarberShops() {
  return  await fetch("http://localhost:8080/barber-shops",)
  .then((res) => res.json())
  .catch(() => [])
}