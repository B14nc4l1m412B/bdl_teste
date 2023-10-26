import { Routes, Route} from "react-router-dom"

import Ola from "./paginas/Ola"
import Objetivo from "./paginas/Objetivo"
import Ideia from "./paginas/Ideia"
import Equipamento from "./paginas/Equipamento"
import Bibliografia from "./paginas/Bibliografia"
import Login from "./paginas/Login"
import Cadastro from "./paginas/Cadastro"
import ReturnaSenha from "./paginas/ReturnaSenha"

function Router(){
    return(
        <Routes>
            <Route path="/" element={<Ola />} />
            <Route path="/objetivo" element={<Objetivo />} />
            <Route path="/ideia" element={<Ideia />} />
            <Route path="/equipamento" element={<Equipamento />} />
            <Route path="/bibliografia" element={<Bibliografia />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/returnasenha" element={<ReturnaSenha />} />
        </Routes>
    )
}

export default Router