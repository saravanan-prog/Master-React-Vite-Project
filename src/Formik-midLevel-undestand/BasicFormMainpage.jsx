import { Formik,Form,Field } from "formik"
import BasicForm from "./BasicForm"
import { initialValue,handleSubmit } from "./form-action"

export default function BasicFormMainpage() {


    return (
        <>

            <div className="container">
                <div className="h3 text-primary text-center"> Registration Form </div>
                <div>
                    <Formik
                        initialValues={initialValue}
                        onSubmit={handleSubmit}
                    >
                        <BasicForm />
                    </Formik>
                </div>
            </div>
        </>
    )
}