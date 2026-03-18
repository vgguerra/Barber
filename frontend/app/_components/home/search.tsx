import { SearchIcon } from "lucide-react"

// UI Components
import { Button } from "@/app/_components/ui/button"
import { Input } from "@/app/_components/ui/input"

const Search = () => {
    return ( 
        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Buscar"></Input>
          <Button>
            <SearchIcon></SearchIcon>
          </Button>
        </div>
     );
}
 
export default Search;