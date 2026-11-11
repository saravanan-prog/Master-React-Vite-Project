import  Button from "react-bootstrap/Button";


export default function ButtonComponnet(){

    return(
        <>
            <div className="container ">
                <Button variant="primary" className="ms-3"> Click me </Button>
                <Button variant="danger"  className="ms-3">  Click me </Button>
                <Button variant="success" className="ms-3"> Click me </Button>
            </div>
        
        
        </>
    )
}