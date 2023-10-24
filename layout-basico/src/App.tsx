import Card from "./components/card/Card"
import Contador from "./components/contador/Contador"
import Tarefa from "./components/tarefa/Tarefa"
import Home from "./pages/home/Home"

function App() {
    return (
        <>
            <Card titulo="C#" descricao="C3 melhor que Java"/>
            <Card titulo="Java" descricao="java não chega perto do c#"/>

            <Contador />
            <Tarefa />
            <Home />
            
        </>
    )
}

export default App