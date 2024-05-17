import { useState } from "react"

export default function PlayerForm(props){
    const [name, setName] = useState('')
    const [score, setScore] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        props.handleAddPlayers({name, score})
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Nome do jogador" value={name} onChange={(e) => setName(e.target.value)}/>
            <input type="number" placeholder="Nota do jogador" value={score} onChange={(e) => setScore(e.target.value)}/>
            <button type="submit"> Cadastrar</button>
        </form>
    )
}