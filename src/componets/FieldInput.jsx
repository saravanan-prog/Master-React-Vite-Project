import { Field } from "formik"
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
            fildChildren
        }
    }
) {
    return (
        <>
            {fieldVisible && (
                <div>
                    <label className="form-label" htmlFor={fieldID}>{fieldLabel}</label>
                    {fieldType != "select" ? (
                        <div>
                            {fieldType === "radio" || fieldType === "checkbox" ?
                                (
                                    fildChildren.map((value,key) => {
                                        return (
                                            <div key = {key} className="form-check form-check-inline">
                                                <Field
                                                    id={fieldID}
                                                    type={fieldType}
                                                    name={fieldname}
                                                    className={fieldClassName}
                                                    value = {value?.checkboxValue}
                                                />
                                                <label htmlFor={fieldID}> {value?.checkboxLabel }</label>
                                            </div>
                                        )
                                    })

                                )

                                :
                                <Field
                                    id={fieldID}
                                    type={(fieldType != "textarea") && fieldType}
                                    as={(fieldType === "textarea") && fieldType}
                                    name={fieldname}
                                    className={fieldClassName}
                                    placeholder={fieldPlaceholder}
                                />
                            }


                        </div>
                    ) : (
                        <FieldSelectBox
                            fieldId={fieldID}
                            fieldType={fieldType}
                            fieldName={fieldname}
                            fieldClassname={fieldClassName}
                            fieldOption={fieldOption}
                        />
                    )}
                </div>
            )
            }
        </>
    )
}