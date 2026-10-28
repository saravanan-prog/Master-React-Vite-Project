import { useState } from "react"

import actoryVijayImage from '../assets/actor-images/actory-vijay.jpg'
import noProfileImage from '../assets/actor-images/blankProfile.jpg'
import ShowProfile from "./components/ShowProfile"
import ProfileForm from "./components/ProfileForm"


export default function B_ProfileInformation() {

    const [formData, setFormData] = useState(
        {
            candidatename: "saravanan",
            candidateAge: 27
        }
    )
    const [edit, setEdit] = useState(false)

    const handleEdit = (data) => setEdit(data)
    const handleSubmit = (e) => {
        e.preventDefault()
        setEdit(false)
    }

    return (
        <>
            <div className="conatainer">
                <div className="h3 text-center text-primary"> Personal Information </div>
                <div className="card">

                    {!edit ?
                        (
                            <>
                                <ShowProfile
                                    candidatename={formData.candidatename}
                                    candidateAge={formData.candidateAge}
                                    handleEdit={handleEdit}
                                />
                            </>
                        )
                        :
                        (
                            <>

                                <ProfileForm
                                    formData={formData}
                                    setFormData={setFormData}
                                    handleSubmit={handleSubmit}

                                />
                            </>
                        )

                    }

                </div>

            </div>

        </>
    )
}