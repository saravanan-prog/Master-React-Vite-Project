import * as Yup from 'yup'


export const initialValue = {
    candiateName: "",
    candidiateAge:"",
    canididatePassword:"",
    address:"",
    country:"",
    gender:""
}

export const handleSubmit = (value) => {
    console.log("Form Submitted====>",value)
    // Api - code
}

export const validationSchema = Yup.object(
    {
        candiateName: Yup.string()
            .required("Candidate Name is Manditory")
            .min(3,"Minumum 3 character required")
            .max(10,"Maximum 10 character limitted")
            ,
        candidiateAge: Yup.string()
            .required("Candidate Age is Manditory"),
        canididatePassword: Yup.string()
            .required("Candidate Password is Manditory"),
        address: Yup.string()
            .required("Candidate address is Manditory"),
        country: Yup.string()
            .required("Candidate country is Manditory"),
        
    }
)