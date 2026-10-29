export default function AddFruitForm(
    {
        handleChange,
        addFruit
    }
){


    return (
        <>
        
            <div className ="mt-5">
                <div className="h5"> ADD New Fruit</div>
                <label htmlFor="" className="form-label">Enter New Fruit</label>
                <input type="text" name="newFruit" onChange ={ handleChange } /> 
                <button onClick={addFruit}> Add New Fruit </button>
            </div>
        </>
    )
}