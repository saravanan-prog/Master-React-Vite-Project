export default function ShowProfile(
    {
        candidatename,
        candidateAge,
        handleEdit
    }
) {
  return (
    <>
      <div>
        <span className="h5"> Candidate Name </span>
        <span> {candidatename} </span>
      </div>
      <div>
        <span className="h5 mt-3"> Candidate Age </span>
        <span> {candidateAge} </span>
      </div>
      <div>
        <button className="btn btn-primary mt-3" 
            onClick = {()=> handleEdit(true)}
        >
          Edit
        </button>
      </div>
    </>
  );
}
