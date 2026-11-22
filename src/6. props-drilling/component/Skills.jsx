export default function Skills(
    {skills}
) {


    return (
        <>
            <div className="mt-3">
                <div className="h3 text-primary">Skills </div>
                <div>
                    {skills.map((skill,key)=> (
                        <div className="fs-5" key={key}>{skill}</div>
                    ))}
                   
                </div>
            </div>
        </>
    )
}