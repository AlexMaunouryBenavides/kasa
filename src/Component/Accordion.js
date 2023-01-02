
import React, {useState} from "react"
import "../styles.css/Accordion.css"
import ArrowD from"../Assets/Arrow-down.svg"

export default function Accordion({title, description}) {

        const [open, setOpen] = useState(false)


    return (
        <div className="accordion">
            <div className="title">
                <h4>{title}</h4>
                <span><img className={`arrow ${open}`} src={ArrowD} alt="bannière" onClick={()=> setOpen(!open)}/></span>
            </div>
            {
                open && <div className="content"><p>{description}</p></div>
            }
            
        </div>
        
    )
}