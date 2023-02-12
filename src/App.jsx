import React from "react"
import Homepage from "./Components/Homepage"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Createusers from "./Components/Createusers"
import Users from "./Components/Users"
import Edit from "./Components/Edit"
const App=()=>{
    return(
        <div>
            <BrowserRouter>
            <Homepage/>
            <Routes>
                <Route path="/" element={<Createusers/>} />
                <Route path="/users" element={<Users/>}/>
                <Route path="/edit/:index" element={<Edit/>}/>
            </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App