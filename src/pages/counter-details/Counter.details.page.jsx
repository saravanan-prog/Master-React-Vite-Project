import { useSelector,useDispatch } from "react-redux"

export default function Counter(){

    useSelector((state) => console.log("detils page Store state====>",state))

    const count = useSelector(state => state.counter.count)

    return(
        <>
            <div className="container mt-3">
               <div className="h4">Counter Details</div>
                <div className="mt-3">

                    <h3>Current Counter Value: {count} </h3>

                    <p>
                        The counter value is maintained in the Redux store.
                        You can update this value from the Home Page using
                        Increment, Decrement, and Reset actions.
                    </p>

    
                    </div>
            </div>
        </>
    )
}