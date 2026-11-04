import { Field, ErrorMessage } from "formik"
import FieldSelectBox from "./FormSelectBox"

export default function FieldInput(
    {
        fields: {
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
) {
    return (
        <>
            {fieldVisible && (
                <div>
                    <label className="form-label">{fieldLabel}</label>
                    {fieldType != "select" ? (
                        <div>
                            <Field
                                id={fieldID}
                                type={fieldType !== "textarea" ? fieldType : undefined}
                                as={fieldType === "textarea" ? "textarea" : undefined}
                                name={fieldname}
                                className={fieldClassName}
                                placeholder={fieldPlaceholder}
                            />
                            <ErrorMessage 
                                name={fieldname} 
                                component={"div"} 
                                className="text-danger" 
                            />
                        </div>
                    ) : (
                        <div>
                            <FieldSelectBox
                                fieldId={fieldID}
                                fieldType={fieldType}
                                fieldName={fieldname}
                                fieldClassname={fieldClassName}
                                fieldOption={fieldOption}
                            />
                            <ErrorMessage 
                                name={fieldname} 
                                component={"div"} 
                                className="text-danger"
                            />
                        </div>

                    )}
                </div>
            )
            }
        </>
    )
}