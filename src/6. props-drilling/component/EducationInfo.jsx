import ExprienceInfo from "./ExprienceInfo";

export default function EducationInfo(
    {
       student: {
        education:{
            hsc,
            sslc
        },
        exprience,
        projects,
        skills
       }
    }
) {


    return (
        <>
            <div className="mt-3">
                <div className="h3 text-primary">Education Information</div>
                <div>
                    <span className="fs-5">SSLC Mark</span>
                    <span> {sslc}  </span>
                </div>

                <div>
                    <span className="fs-5">HSC MArk</span>
                    <span> {hsc} </span>
                </div>

                <div>
                   <ExprienceInfo 
                        exprience = {exprience}
                        projects  = {projects}
                        skills   = {skills}
                   />
                </div>
            </div>
        </>
    )
}