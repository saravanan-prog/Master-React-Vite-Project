import { useRef } from "react"
import { useDispatch } from "react-redux"
import { addAllocation } from "./allocation.form.slice"

export default function AllocationForm(){

    const studentname = useRef()
    const pickedCoruse = useRef()
    const timeSlot = useRef()
    const trainer  = useRef()
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        
        const formData = {
            student: studentname.current.value,
            pickedCoruse:pickedCoruse.current.value,
            timeSlot:timeSlot.current.value,
            trainer:trainer.current.value,
        }

        if(formData != undefined){
            dispatch(addAllocation({batch:formData}))
        }
    }



    return(
        <>
            <div>
                <form onSubmit = {handleSubmit}>
                    <div>
                        <label htmlFor="student-name" className="form-label">Student Name</label>
                        <input type="text" className="form-control" id="student-name" ref={studentname} />
                    </div>
                     <div>
                        <label htmlFor="picked-course" className="form-label">Picked Course</label>
                        <input type="text" className="form-control" id="picked-course" ref={pickedCoruse} />
                    </div>
                    <div>
                        <label htmlFor="time-slot" className="form-label">Batch Time slot</label>
                        <select className="form-control" id="time-slot" ref={timeSlot}>
                            <option value="">Please choose time slot</option>
                            <option value="Mor - 8 to 9">Mor - 8 to 9</option>
                            <option value="Mor - 10 to 11">Mor - 10 to 11</option>
                            <option value="Afn - 3 to 4">Afn - 3 to 4</option>
                            <option value="Eve - 6 to 7">Eve - 6 to 7</option>
                        </select>
                    </div>
                    <div>
                       <label htmlFor="trainer" className="form-label">Batch Trainer</label>
                        <select className="form-control" id="trainer" ref={trainer}>
                            <option value="">Please Assgin Trainner</option>
                            <option value="Sridhar">Srithar</option>
                            <option value="Gopi">Gopi</option>
                            <option value="Saravanan">Saravanan</option>
                        </select>
                    </div>
                    <div className="mt-4">
                        <button type="submit" className="btn btn-primary">Add Batch</button>
                    </div>
                </form>
            </div>
        
        
        </>
    )
}