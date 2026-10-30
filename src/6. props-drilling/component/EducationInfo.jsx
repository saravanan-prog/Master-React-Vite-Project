export default function EducationInfo(
   {
     sslc,
     hsc
   }
){


    return(
        <>  
            <div className="h3">Education Information</div>
            <div>
                <span className="fs-32">SSLC Mark</span>
                <span> {sslc} </span>
            </div>

            <div>
                <span className="fs-32">HSC MArk</span>
                <span> {hsc} </span>
            </div>

        
        </>
    )
}