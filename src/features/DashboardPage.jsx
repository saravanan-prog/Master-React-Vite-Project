import { useEffect } from 'react'
import Button from 'react-bootstrap/Button'


export default function DashboardPage(){

    useEffect(()=>{
       
    },[])

    return(
        <>
            <div className="container">
                <div className="h3">Dashbaord</div>
                <Button variant="primary"> Click me </Button>
            </div>
        </>
    )
}