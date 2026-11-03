import { Field } from "formik"

export default function FieldSelectBox(
    {
        fieldId,
        fieldType,
        fieldName,
        fieldClassname,
        fieldOption
    }
){


    return(
        <div>
            <Field 
                as = {fieldType} 
                name= {fieldName} 
                className = {fieldClassname} 
                id={fieldId}
            >
                {fieldOption && fieldOption.length != 0 ? (
                    fieldOption.map(
                      (value,key)=> 
                        (
                            <option key ={key} value={value} >{value}</option>
                         )
                    )
                )
                :
                  <option> No Item Found </option>
                }
            </Field>
        </div>
    )
}