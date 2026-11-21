import { useState } from "react"

export default function B_SelectBoxEvent(){

    const [selectedItem,setSelectedItem] = useState(null)

    return(
        <>
            <div className="container m-3">
                <label htmlFor="country" className="form-label">Country</label>
                <select name="country" id="country">
                    <option value="India">India</option>
                    <option value="Pakisthan">Pakisthan</option>
                    <option value="China">China</option>
                    <option value="Thailand">Thailand</option>
                </select>
            </div>
        </>
    )
}