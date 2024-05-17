import { useState } from "react"

export default function Contador(props){

    function soma(){
        props.setCount(props.count+1)
    }
    return (
        <button onClick={soma}>{props.count}</button>
    )
}