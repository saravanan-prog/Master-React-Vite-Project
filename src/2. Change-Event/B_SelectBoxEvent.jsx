import { useState } from "react"

export default function B_SelectBoxEvent(){

    const [selectedItem,setSelectedItem] = useState(null)

    return(
        <>
            <div className="container m-3">
                <label htmlFor="country" className="form-label">Country</label>
                <select name="country" id="country" onChange={(e)=>setSelectedItem(e.target.value)}>
                    <option value="India">India</option>
                    <option value="Pakisthan">Pakisthan</option>
                    <option value="China">China</option>
                    <option value="Thailand">Thailand</option>
                </select>
                <div className="mt-5">
                    <span className="text-primary h6">You Country is :</span>
                    <span className ="ms-2 h5">{selectedItem}</span>
                </div>
            </div>
        </>
    )
}