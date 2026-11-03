import { Field } from "formik"

export default function FieldInput( 
    {
        fields:{
            
            fieldClassName,
            fieldID,
            fieldLabel,
            fieldPlaceholder,
            fieldType,
            fieldVisible,
            fieldname
        }
    }
)
{
    
    return(
        <div>
            <label className="form-label">{fieldLabel}</label>
            <Field
                id = {fieldID}
                type = {fieldType}
                name = {fieldname}
                className = {fieldClassName} 
                placeholder= {fieldPlaceholder}
            />
        </div>
    )
}