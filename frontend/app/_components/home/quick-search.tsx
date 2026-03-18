import Image from "next/image"
import { Button } from "../ui/button"
import { QuickSearchOption } from "@/types/quickSearch"

interface QuickSearchProps {
  options: QuickSearchOption[]
}

const QuickSearch = ({ options }: QuickSearchProps) => {
  return (
    <div className="hide-scrollbar mt-6 flex gap-3 overflow-x-auto">
      {options.map((option) => (
        <Button key={option.title} className="gap-2" variant="secondary">
          <Image
            src={option.imageUrl}
            width={16}
            height={16}
            alt={option.title}
          />
          {option.title}
        </Button>
      ))}
    </div>
  )
}

export default QuickSearch
