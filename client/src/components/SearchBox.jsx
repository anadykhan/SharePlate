import { Input } from "@mui/material"
import { useState } from "react"

const SearchBox = () => {
    const [search, setSearch] = useState("")

    const handleOnChange = (event) => {
        setSearch(event.target.value);
    }
  return (
    <div className="h-[12rem] w-full bg-[#eabd4e] flex justify-center items-center px-7">
          <form className="flex flex-col gap-5 w-full">
            <div className="text-3xl">Search</div>
            <input 
            type="text" 
            className="focus:outline-none w-ful h-[4rem] p-5 font-light"
            placeholder="Search for your Donation" 
            name="search"
            onChange={handleOnChange}
            value={search}
            />
        </form>
    </div>
  )
}
export default SearchBox