function Titulo(props){
    return (
        <div>
            <h1 style={{color: props.color}}>{props.texto}</h1>
        </div>
    )
}
export default Titulo;