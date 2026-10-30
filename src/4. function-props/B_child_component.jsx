
export default function B_child_component(
    {
        count,
        addCout,
        subractCount
    }
){

    return(
        <>
         
            <div>
                <span className="fs-5"> Count : </span>
                <span className="ms-3"> {count} </span>
            </div>
            <div className="mt-4">
                <button onClick = {addCout}> ADD </button>
                <button onClick = {subractCount}> SUB </button>
            </div>
    
        </>
    )
}