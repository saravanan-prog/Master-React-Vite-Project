import { useState } from "react"

export default function B_SelectBoxEvent(){

    const [selectedItem,setSelectedItem] = useState(null)

    return(
        <>
            <div className="container m-3">
                <label htmlFor="country" className="form-label h5">Country</label>
                <select 
                    name="country" 
                    id="country" 
                    className="form-control"
                    onChange = {(e)=>setSelectedItem(e?.target?.value)}
                >
                    <option value="">Please choose Your country</option>
                    <option value="India">India</option>
                    <option value="Pakisthan">Pakisthan</option>
                    <option value="China">China</option>
                    <option value="Thailand">Thailand</option>
                </select>
            </div>
            <div className="mt-3">
                <span className ="h6">You choosed country is : </span>
                <span className="ms-2">{selectedItem}</span>
            </div>
        </>
    )
}