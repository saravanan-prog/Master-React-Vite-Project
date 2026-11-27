import { useEffect } from "react"
import { fetchUserList } from "./dashboard.thunk"
import { useDispatch,useSelector } from "react-redux"

export default function DashboardPage(){

    const {loading,data,error} = useSelector((state)=>state.dashboard)

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchUserList())
    },[dispatch])

    return(
        <>
            <div className="container">
                <h1 className="text-center text-primary">Dashboard</h1>
                <div>
                    {loading && <h1> Dashboard Data loading....</h1>}
                    {error && <p> {error} </p>}
                    {data && JSON.stringify(data) }
                </div>
                
            </div>
        
        </>
    )
}
