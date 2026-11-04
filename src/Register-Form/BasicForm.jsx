import { Form,Field } from "formik"
import formField from '../assets/form-json/RegisterForm.json'
import FieldInput from "../componets/FieldInput"

export default function BasicForm(){

    return (
        <>
            <div className="container">
                <Form>
                    {formField.map((value,key) => {
                        return (
                            <div key = {key}>
                                <FieldInput fields = {value} />
                            </div>
                        )
                    })}  
                </Form>
            </div>
        </>
    )
}