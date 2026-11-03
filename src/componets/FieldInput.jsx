import { Field } from "formik"
import FieldSelectBox from "./FormSelectBox"

export default function FieldInput( 
    {
        fields:{
            fieldClassName,
            fieldID,
            fieldLabel,
            fieldPlaceholder,
            fieldType,
            fieldVisible,
            fieldname,
            fieldOption,
        }
    }
)
{
    return(
        <>
            {fieldVisible && (
                <div>
                    <label className="form-label">{fieldLabel}</label>
                    {fieldType != "select" ? (
                       <div>
                            <Field
                                id = {fieldID}
                                type = {(fieldType !="textarea") && fieldType}
                                as =   {(fieldType === "textarea") && fieldType}
                                name = {fieldname}
                                className = {fieldClassName} 
                                placeholder= {fieldPlaceholder}
                            />
                            
                        </div>
                    ):(
                        <FieldSelectBox 
                            fieldId  = {fieldID}
                            fieldType = {fieldType}
                            fieldName = {fieldname}
                            fieldClassname = {fieldClassName}
                            fieldOption = {fieldOption}
                        />
                    )}
                </div> 
              )  
            } 
            
        </>
    )
}