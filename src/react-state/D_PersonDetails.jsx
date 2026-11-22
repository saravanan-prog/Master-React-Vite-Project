import { useState } from "react";

export default function D_PersonDetails() {

  const [person, setPerson] = useState(
    {
      name: "Saravanan",
      address: {
        tempAddress: "4th ave west, velachery, Chennai",
        permanentAddress: "2, Meenakshi amman kovil st, Madurai",
      }
    }
 );

 const changeTempAddress = (address) => {
    setPerson({
        ...person,
        address:{
          ...person.address,
          tempAddress:address
        }
    })
 }

  const changePermanentAddress = (address) => {
    setPerson({
        ...person,
        address:{
          ...person.address,
          permanentAddress:address
        }
    })
 }

  return (
    <>
      <div className="container">
         <div className="h3 mt-4 text-primary">Employee Details</div>
         <div>
            <span className="fs-5">Emp Name : </span>
            <span>{person?.name}</span>
          </div>
         <div> 
           <span class="fs-5">Temp Address: </span>
           <span>{person?.address?.tempAddress}</span>
         </div>
         <div> 
           <span class="fs-5">Permanent Address: </span>
           <span>{person?.address?.permanentAddress}</span>
         </div>
         <div className="mt-3">
            <button 
              className = "btn btn-primary"
              onClick = {() => changeTempAddress("6th cross-st,malishwar nagar, mambakkam")} 
            >
                Change Temp Address
            </button>
            <button 
              className="btn btn-secondary ms-3"
              onClick ={ ()=>changePermanentAddress("7th cross st, varazhi temple near, solinganallur")}
              >Change Permanent Address</button>
         </div>
      </div>
    </>
  );
}
