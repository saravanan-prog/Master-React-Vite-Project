import { useState } from "react";

export default function D_PersonDetails() {
  const [person, setPerson] = useState({
    name: "Saravanan",
    address: {
      tempAddress: "4th ave west, velachery,chennai",
      permanentAddress: "2, Meenakshi amman kovil st, Chennai",
    }
  });

  return (
    <>
      <div className="cotainer mt-5">
        <div className="h2 text-center text-primary"> Person information </div>
        <div className = "mt-4">
          <table className="table">
            <tr>
              <th>Person Name </th>
              <td>{person.name}</td>
              <td>
                <button
                  onClick={() => {
                    setPerson({
                      ...person,
                      name: "Rajesh",
                    });
                  }}
                >
                  Update Name
                </button>
              </td>
            </tr>
            <tr>
              <th>Person Temp. Address </th>
              <td>{person.address.tempAddress}</td>
              <td>
                <button
                  onClick={() => {
                    setPerson({
                      ...person,
                      address: {
                        ...person.address,
                        tempAddress: "2nd cross st madipakam chennai",
                      },
                    });
                  }}
                >
                  Update Temp Address
                </button>
              </td>
            </tr>
            <tr>
              <th>Person Permanent Address </th>
              <td>{person.address.permanentAddress}</td>
              <td>
                <button
                  onClick={() => {
                    setPerson({
                      ...person,
                      address: {
                        ...person.address,
                        permanentAddress: "3, pillyar kovil st, Tiruchy",
                      },
                    });
                  }}
                >
                  Update Permanent Address
                </button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}
