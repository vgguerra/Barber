// UI Components
import { Card, CardContent } from "@/app/_components/ui/card"

const Footer = () => {
  return (
    <footer>
      <Card>
        <CardContent className="px-3 py-2">
          © 2023 Copyright <span className="font-bold">FSW Barber</span>
        </CardContent>
      </Card>
    </footer>
  )
}

export default Footer
