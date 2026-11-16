import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export default function Customer(){

    const location = useLocation()

    useEffect(()=>{
        if(location.search != ""){
            const querParam = new URLSearchParams(location.search)
            const id = querParam.get('id')
            console.log("id===>",id)
        }
    },[])



    return(
        <>
            <div className="container">
                <div className="text-center h3 text-primary">Customers</div>
            </div>
        
        </>
    )
}