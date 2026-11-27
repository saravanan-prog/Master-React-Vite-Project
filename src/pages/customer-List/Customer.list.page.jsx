import { useDispatch,useSelector } from "react-redux"

export default function CustomerListPage(){

    const {loading,data,error} = useSelector((state)=>state?.dashboard)

    return(
        <>
            <div className="container">
                <div className="h1 text-center text-primary">Customer List </div>
                 <div>
                    {loading && <h1> Dashboard Data loading....</h1>}
                    {error && <p> {error} </p>}
                    {data && JSON.stringify(data) }
                </div>
            </div>
        
        </>
    )
}