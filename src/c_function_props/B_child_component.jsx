
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
                <span className="fs-3">Count : </span>
                <span> {count} </span>
            </div>
            <div>
                <button onClick = {addCout}> ADD </button>
                <button onClick = {subractCount}> SUB </button>
            </div>
    
        </>
    )
}