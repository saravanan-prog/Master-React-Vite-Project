import Projects from "./Projects"

export default function ExprienceInfo(
    {
        exprience :{
            "2022-2024" : tcsExprience,
            "2024-2026" : infosysExprience
        },
        projects,
        skills
    }
) {


    return (
        <>
            <div className="mt-3 ">
                <div className="h3 text-primary">Exprience </div>
                <div>
                    <span className="fs-5">TCS</span>
                    <span> {tcsExprience} </span>
                </div>

                <div>
                    <span className="fs-5">Infosys</span>
                    <span> {infosysExprience} </span>
                </div>
                <div>
                    <Projects 
                        projects = {projects} 
                        skills = {skills}
                    />
                </div>
            </div>
        </>
    )
}