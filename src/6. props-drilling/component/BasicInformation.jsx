import EducationInfo from "./EducationInfo";

export default function BasicInformation(
  { student }
) {
  return (
    <>
      <div className="container mt-5">
        <div className="h3">Basic Information</div>
        <div>
          <span className="fs-5">Name</span>
          <span> {student.name} </span>
        </div>

        <div>
          <span className="fs-5">Address</span>
          <span> {student.address} </span>
        </div>
        <div>
          <EducationInfo 
             student = {student}
          />
        </div>
      </div>
    </>
  );
}
