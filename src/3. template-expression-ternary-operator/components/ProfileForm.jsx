export default function ProfileForm(
    {
        formData,
        setFormData,
        handleSubmit
    }
) {


    return (
        <form onSubmit={handleSubmit}>
            <div className="row">
                <label className="formp-lablel"> Candidate Name </label>
                <input
                    type="text"
                    className="form-control"
                    name="candidatename"
                    value={formData.candidatename}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            candidatename: e.target.value
                        })
                    }
                />
            </div>
            <div className="row">
                <label className="formp-lablel"> Candidate Age </label>
                <input
                    type="text"
                    className="form-control"
                    value={formData.candidateAge}
                    name="candidateAge"
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            candidateAge: e.target.value
                        })
                    }
                />
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>

    )
}