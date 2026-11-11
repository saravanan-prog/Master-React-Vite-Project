import { useState } from "react";
import  {Spinner} from "react-bootstrap";
import { Button,Badge } from "react-bootstrap";



export default function SpinnerComponent(){

        const [isOn, setIsOn] = useState(false);
     const toggleButton = () => {
        setIsOn(!isOn);
    };

    return(
        <>
            <div className="container ">
                
                <Spinner variant="primary" />
                <Spinner variant="success" />
                <Spinner variant="danger" />
                <Spinner variant="warning" />
                <Spinner variant="info" />
                <Spinner variant="dark" />
            </div>

        </>
    )
}