
import { useState } from "react"
import { Button,Collapse } from "react-bootstrap"

export default function CollapseComponent(){

    const [open,setOpen] = useState(false)

    const handleClick = () => {
        setOpen(!open)
    }

    return(
        <>
            <div className="container">
                <Button 
                    variant="primary"
                    onClick = {handleClick}
                > 
                    {!open ? "show Content" : "Hide Content"} 
                </Button>

                <Collapse in={open}>
                    <div className="h3 mt-3">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, nemo possimus. Cum sunt repellendus perferendis ratione laboriosam beatae, placeat ipsa modi ea exercitationem temporibus inventore distinctio, obcaecati debitis impedit aspernatur?
                    </div>
                </Collapse>




            </div>

            
        
        
        </>
    )
    
}