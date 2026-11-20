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

  return (
    <>
      
    </>
  );
}
