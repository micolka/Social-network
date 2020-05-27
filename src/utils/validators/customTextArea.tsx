import React from "react";
import styles from "./customTextArea.module.css";
import {Field, WrappedFieldProps, WrappedFieldMetaProps} from "redux-form";
import { FieldValidatorType } from "./validators";

type FormControlPropsType = {
    meta: WrappedFieldMetaProps
}

export const FormControl: React.FC<FormControlPropsType> = ({meta: {touched, error}, children}) => {
    const hasError = touched && error;
    return <div className={styles.customTextArea + " " + (hasError ? styles.error : '')}>
        {children}
        <div>
            {hasError && <span>{error}</span>}
        </div>
    </div>
}

export const TextArea: React.FC<WrappedFieldProps> = (props) => {
    //const {input, meta, child, ...restProps} = props;
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}> <textarea {...input} {...restProps} /></FormControl>
}

export const Input: React.FC<WrappedFieldProps> = (props) => {
   // const {input, meta, child, ...restProps} = props;
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}> <input {...input} {...restProps} /></FormControl>
}

export function createCustomField<FormKeysType extends string> (placeholder: string | undefined,
                                name: FormKeysType,
                                component: React.FC<WrappedFieldProps>,
                                validators: Array<FieldValidatorType>,
                                className: string | null,
                                props = {}) {
    return <div>
        <Field placeholder={placeholder} name={name} component={component}
            validate={validators} className={className} {...props} />
    </div>
}