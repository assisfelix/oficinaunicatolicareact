import Atividades from "./Atividades";

export default function ListaAtividades(props){
    return (
        <div>
            {props.lista.map(atividade => 
            <Atividades atividade={atividade}></Atividades>)}
        </div>
    )
}