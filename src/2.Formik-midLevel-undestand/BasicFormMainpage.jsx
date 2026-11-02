import { Formik,Form,Field } from "formik"
import BasicForm from "./BasicForm"

export default function BasicFormMainpage() {


    return (
        <>

            <div className="container">
                <div className="h3 text-primary text-center"> Basic Form </div>
                <div>

                    <Formik
                        initialValues={{
                            candidateName: "",
                            candidateAge:"",
                            candidateEmail:"",
                            candidatePassword:""
                        }}

                        onSubmit={(value) => console.log("form is submitted====>", value)}

                    >
                        <BasicForm />
                    </Formik>
                </div>
            </div>
        </>
    )
}