import { useSelector,useDispatch } from "react-redux"

export default function BatchListPage(){
    
    const batchData =   useSelector((state)=> state.batches.batchAllocation)

    const saravananBatch = batchData.filter((student) => student.trainer.toLowerCase() === "saravanan")
    const sridharbatch   = batchData.filter((student) => student.trainer.toLowerCase() === "sridhar")
    const gopiBatch      = batchData.filter((student) => student.trainer.toLowerCase() === "gopi")



    console.log("batchData====>",batchData)


    return(
        <>
            <div className="container">
                <div className="h5 text-primary text-center text-transform"> Trainer Batch List </div>
                <div className="list-page mt-3">
                    <div className="h5"> Saravanan Batch </div>
                    {saravananBatch.length > 1 ?
                        saravananBatch.map((student)=>(
                            <>
                                <div>
                                    <span className="h6"> Student Name :</span>
                                    <span className="ms-3"> {student.student}</span>
                                </div>
                                 <div>
                                    <span className="h6">Course</span>
                                    <span className="ms-3"> {student.pickedCoruse}</span>
                                </div>
                                <div>
                                    <span className="h6">Time slot</span>
                                    <span className="ms-3"> {student.timeSlot}</span>
                                </div>
                            </>
                            
                        ))
                    :
                        <div className="h6"> Currently no studnet avaialbale </div>
                    
                    }
                </div>
                <div className="list-page mt-3">
                    <div className="h5"> Sridhar Batch </div>
                    {sridharbatch.length > 1 ?
                        sridharbatch.map((student)=>(
                            <>
                                <div>
                                    <span className="h6"> Student Name :</span>
                                    <span className="ms-3"> {student.student}</span>
                                </div>
                                 <div>
                                    <span className="h6">Course</span>
                                    <span className="ms-3"> {student.pickedCoruse}</span>
                                </div>
                                <div>
                                    <span className="h6">Time slot</span>
                                    <span className="ms-3"> {student.timeSlot}</span>
                                </div>
                            </>
                            
                        ))
                    :
                        <div className="h6"> Currently no studnet avaialbale </div>
                    
                    }
                </div>
                  <div className="list-page mt-3">
                    <div className="h5"> Gopi Batch </div>
                    {gopiBatch.length > 1 ?
                        gopiBatch.map((student)=>(
                            <>
                                <div>
                                    <span className="h6"> Student Name :</span>
                                    <span className="ms-3"> {student.student}</span>
                                </div>
                                 <div>
                                    <span className="h6">Course</span>
                                    <span className="ms-3"> {student.pickedCoruse}</span>
                                </div>
                                <div>
                                    <span className="h6">Time slot</span>
                                    <span className="ms-3"> {student.timeSlot}</span>
                                </div>
                            </>
                            
                        ))
                    :
                        <div className="h6"> Currently no studnet avaialbale </div>
                    
                    }
                </div>
            </div>
        </>
    )
}