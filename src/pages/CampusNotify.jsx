import { useState } from "react";
function App(){
    const[placement,setPlacement]=useState("")
    const[events,setEvents]=useState([])
    const[result,setResult]=useState([])
    const[editId,setEditId]=useState(null)
    const addPlacement=()=>{
        if(!placement)return;
        const newPlacement={
            id:Date.now(),
            events,
            result
        }
        setPlacement([...placement,newPlacement])
        setEvents(events)
        setResult(result)
    }
    const deletePlacement=(id)=>{
        setPlacement(placement.filter(placement.id!=id))
    }
    const editPlacement=(placement)=>{
        setPlacement(placement.events)
        setPlacement(placement.result)
    }
    const updatePlacement=()=>{
        setPlacement(placement.map(
            placement.id==editId
        ))
        setPlacement(events)
        setPlacement(result)

    }
}