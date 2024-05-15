import { SearchBar } from "./SearchBar"

export const AppBar = () => {
    return (
        <div className="flex justify-between">
            <div className="span-col-1">
                Youtube
            </div>
            <div className="span-col-1">
                <SearchBar/>
            </div>
            <div className="span-col-1">
                SignIn
            </div>
        </div>
    )
}